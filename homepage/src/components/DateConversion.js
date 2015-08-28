'use strict';

function YMVDateToDisplayableDate(ymv) {
  var displayDate = "";
  var d = new Date(ymv);
  return d.toLocaleDateString("fr");
}

module.exports = YMVDateToDisplayableDate;