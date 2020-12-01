function wikiParser(section) {
    let sec=$(section)[0].innerText
        .replace(/={3}(((?!={3}).)*)={3}/g,'<h3>$1</h3>')
        .replace(/={2}(((?!={2}).)*)={2}/g,'<h2>$1</h2>')
        .replace(/=(((?!=).)*)=/g,'<h1>$1</h1>')

        .replace(/\'{3}(((?!\'{3}).)*)\'{3}/g,'<b>$1</b>')
        .replace(/\'{2}(((?!\'{2}).)*)\'{2}/g,'<i>$1</i>')

        .replace(/\[{2}(((?!\]).)*)\|(((?!\]).)*)\]{2}/g,'<a href=\"/wiki/$1\">$3</a>')
        .replace(/\[{2}(((?!\]).)*)\]{2}/g,'<a href=\"/wiki/$1\">$1</a>')
    ;

    $(section).html(sec);
}
