﻿
/*
 * GET home page.
 */
exports.index = function (req, res) {
  res.render('index', { title: '主页' });
  return;
}