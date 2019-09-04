const request = require('request');
const { Parser } = require('json2csv');
const fs = require('fs');

let comments: any = [];
const fields = ['created_time', 'message', 'id'];
const opts = { fields };

const requestComment = (url: string, cb: any) => {
  console.log('test', url);
  if (url) {
    request(url, (err: any, res: any, body: any) => {
      const bodyParsed = JSON.parse(body);
      if (err || !bodyParsed || bodyParsed.error) {
        throw new Error(err);
      } else {
        comments = [...comments, ...bodyParsed.data];
        requestComment(bodyParsed.paging.next, cb);
      }
    })
  } else {
    cb(comments);
  }
}

module.exports = function getComments(id: string, apiKey: string, params: any, callBack: (err: any, comments: any) => any) {
  const url = `https://graph.facebook.com/v3.2/${id}/comments?access_token=${apiKey}`;
  requestComment(url, (res: []) => {
    if (res) {
      comments = res.map((x: any) => {
        return {
          created_time: x.created_time,
          message: x.message,
          id: x.id,
        }
      });
      try {
        const parser = new Parser(opts);
        const csv = parser.parse(comments);
        fs.writeFileSync(`./${id}.csv`, csv);
      } catch (err) {
        throw new Error(err);
      }
    }
  });
  return;
}