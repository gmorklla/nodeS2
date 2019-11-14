var express = require('express');
var router = express.Router();

router.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type, responseType, Authorization');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,POST,GET');
  next();
});

const window = {
  id: 1062,
  height: 390,
  width: 640,
  name: 'window_1062',
  controls: [{
      id: 22916,
      name: 'select_22916',
      type: 'select',
      attributes: {
        uppercase: false,
        style: 'position:absolute;transform:translate3d(0,0,0);width:150px;height:35px;font-size:12px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-style:normal;line-height:12px;color:rgb(255,255,255);background:rgb(255,255,255,1);border-width:1px;border-style:solid;border-color:rgb(69,6,32);background-size:undefined;background-image:;background-repeat:undefined;background-color:rgb(177,22,87);background-position-x:0%;background-position-y:0%;font-weight:normal;padding:0 10px;border-radius:10px;border-top:1px solid rgb(69,6,32);border-bottom:1px solid rgb(69,6,32);border-left:1px solid rgb(69,6,32);border-right:1px solid rgb(69,6,32);border-undefined:1px solid rgb(69,6,32);',
        hidden: 'false',
        disabled: 'false'
      },
      options: [],
      tag: 'select'
    },
    {
      id: 22917,
      name: 'div_22917',
      type: 'div',
      attributes: {
        uppercase: 'false',
        style: 'position:absolute;transform:translate3d(0px,100px,0px);width:160px;height:70px;font-size:12px;text-align:left;font-family:Arial,Helvetica,sans-serif;font-style:normal;line-height:12px;color:rgb(0,0,0);background:rgb(255,255,255,0);border-width:1px;border-style:none;border-color:rgb(173,173,173);',
        hidden: 'false',
        disabled: 'false'
      },
      options: [],
      tag: 'div'
    }
  ],
  attributes: {
    style: 'background-size:100%;background-image:linear-gradient(to bottom right, rgb(209,209,209), rgba(255,255,255,1));background-repeat:undefined;background-color:rgb(209,209,209);background-position-x:0%;background-position-y:0%;'
  },
  designId: 703,
  type: 'W'
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.header
  // res.send('respond with a resource');
  res.json(window);
});

module.exports = router;
