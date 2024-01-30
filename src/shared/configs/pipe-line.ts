import { isEmpty } from 'lodash';

interface IPipeLineList {
  dbQuery: any;
  skip: any;
  perPage: any;
  sortQuery: any;
}

export const pipeLineResponse: any[] = [
  {
    $project: {
      _id: 1,
      key: 1,
      value: 1,
      created_at: 1,
      updated_at: 1,
    },
  },
];

export const pipeLineList = (props: IPipeLineList) => {
  const { dbQuery, skip, perPage, sortQuery } = props;
  const pipeLinePaging = [
    { $match: dbQuery },
    { $sort: isEmpty(sortQuery) ? { created_at: 1 } : sortQuery },
    { $skip: skip },
    { $limit: perPage },
  ];
  return [...pipeLinePaging, ...pipeLineResponse];
};
