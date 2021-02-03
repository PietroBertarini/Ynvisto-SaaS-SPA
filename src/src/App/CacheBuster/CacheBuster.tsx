/* eslint-disable no-console */
import {
  FunctionComponent, ReactElement, useEffect, useState,
} from 'react';
import packageJson from '../../../package.json';

const appVersion = packageJson.version;

interface IProps {
  loading: boolean;
  isLatestVersion: boolean;
  refreshCacheAndReload: any
}

interface CacheBusterProps {
  children(props: IProps): ReactElement | null;
}

// version from response - first param, local version second param
const semverGreaterThan = (versionA: string, versionB: string): boolean => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

const refreshCacheAndReload = () => {
  console.log('Clearing cache and hard reloading...');
  if (caches) {
    // Service worker cache should be cleared with caches.delete()
    caches.keys().then((names: string[]) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const name of names) caches.delete(name);
    }).finally(() => {
      // delete browser cache and hard reload
      window.location.reload();
    });
  }
};

const CacheBuster: FunctionComponent<CacheBusterProps> = (props) => {
  const [{ loading, isLatestVersion }, setState] = useState({
    loading: true,
    isLatestVersion: false,
  });

  useEffect(() => {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        const latestVersion = meta.version;
        const shouldForceRefresh = semverGreaterThan(latestVersion, appVersion);

        console.log(`App version ${appVersion}`);
        if (shouldForceRefresh) {
          console.log(`We have a new version - ${latestVersion}. Should force refresh`);
          setState({ loading: false, isLatestVersion: false });
        } else {
          console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
          setState({ loading: false, isLatestVersion: true });
        }
      });
  }, []);

  return props.children({ loading, isLatestVersion, refreshCacheAndReload });
};

export default CacheBuster;
