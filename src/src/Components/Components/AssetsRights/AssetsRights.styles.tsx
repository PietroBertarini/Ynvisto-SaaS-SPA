import styled from 'styled-components';

export interface CardProps {
  color: string;
  children ?: any;
}

export const Main = styled.div<CardProps>`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 2vh;
`;

export const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  .values {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0 5%;
    justify-content: space-between;

    margin: 50px 0;
    color: #777;

    strong {
      color: #05E985;
      font-size: 43px;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 19px;
    }

    /* .totalItens { align-self: flex-start; }
    .valor2020 { align-self: center; }
    .valor2020 { align-self: flex-end; } */
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .list {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    max-width: 95%;

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background-color: rgba(100, 100, 120, 0.3);
    }

    .table {
      width: 100%;
      display: block;
      cursor: grab;
      border-radius: 20px;

      table {
        border-radius: 20px;
        font-size: 20px;
        min-width: 100%;
        border-collapse: collapse;
        table-layout: fixed;

        thead {
          padding-bottom: 0;
          margin-bottom: 0;
          table-layout: fixed;
          padding-left: 20px;

          th {
            min-width: 100px;
            display: inline-block;
            text-align: left;
            color: #999;
            font-weight: normal;
            font-size: 23px;
            padding-right: 20px;
          }

          .large {
            min-width: 250px;  
            width: 350px;
          }

          .largeRight {
            min-width: 250px;  
            text-align: right;
          }
        }

        tbody {
          tr {
            td {
              min-width: 100px;
              border-bottom: 1px solid #999;
              display: inline-block;
              overflow-x: hidden;

              color: #fff;
              font-size: 23px;
              padding: 20px 20px 5px 0;

              .empty {
                width: 70%;
                display: flex;
                float: left;
                content: '';
                height: 3px;
                background-color: #eee;
                display: block;
                margin: 10px auto;
              }

              button {
                color: #03dffc;
                font-weight: bold;
                font-size: 22px;
                padding-left: 10px;
                border:none;
                background-color: transparent;
              }
            }

            .large {
              width: 350px;
              min-width: 250px;             
            }

            .largeRight {
              min-width: 250px;  
              text-align: right;
            }
            
            &:hover {
              background: rgba(106, 187, 233, 0.11);
              td { background: transparent; }
            }
          }
        }
      }
    }
  }
`;
