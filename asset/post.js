window.onload = function() {

    var reg = /<h(\d) id=\"(toc_\d{1,2})\">(.*?)<\/h\d>/g;
    var postStr = document.getElementById('article-content').innerHTML;
    var tocList = postStr.match(reg)
    document.getElementById('toc').innerHTML = func(tocList, 0, 1, "");

};


function func(tocList, index, hn, tocHtml) {
		if (tocList == null || tocList.length == 0) {
			return "";
		}
        if (index > tocList.length - 1) {
            return tocHtml;
        }
        var reg = /<h(\d) id=\"toc_(\d{1,2})\">(.*?)<\/h\d>/g;
        var currToc = tocList[index];
        var currHn = currToc.replace(reg, "$1");
        var currId = currToc.replace(reg, "$2");
        var currText = currToc.replace(reg, "$3");
        var currLi = "<li><a href=\"#toc_" + currId + "\">" + currText + "</a></li>";
        if (currHn == hn) {
            tocHtml += currLi;
        } else if (currHn > hn) {
            for (var i = 0; i < currHn - hn; i++) {
                tocHtml += "<ul>"
            }
            tocHtml += currLi;
        } else if (currHn < hn) {
            for (var i = 0; i < hn - currHn; i++) {
                tocHtml += "</ul>"
            }
            tocHtml += currLi;
        }
        return func(tocList, index + 1, currHn, tocHtml);
}