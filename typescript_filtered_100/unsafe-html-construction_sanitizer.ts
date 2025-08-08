//{fact rule=cross-site-scripting@v1.0 defects=0}

import striptags from 'striptags';
module.exports = function showBoldName(name: any) {
  document.getElementById('name').innerHTML = "<b>" + striptags(name) + "</b>";
}

//{/fact}