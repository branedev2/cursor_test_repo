//
// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
//  function name() {
//     var x = '<h1>hell0</h1>'
//     // ruleid:handlebars_safestring
//     var y = new Handlebars.SafeString(x);
// // {/ex-fact}
//
//     // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
//     // ruleid:handlebars_safestring
//     return new Handlebars.SafeString('<img src="" onload=alert(0)>');
// }
// // {/ex-fact}
//
//
// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// function test2() {
//     var x = 'foooo'
//     var z = new Handlebars;
//     // ruleid:handlebars_safestring
//     var xx = z.SafeString(x)
//     return xx;
// }
// // {/ex-fact}
//
//
//
// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// // ruleid:handlebars_noescape
// var template = Handlebars.compile(source, { noEscape: true });
// var template = "This is {{target}}";
// var target = "user's pictures";
// // {/ex-fact}
//
// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// // ruleid:handlebars_noescape
// var result = Handlerbars.compile(template, { noEscape: true })({ target: target });
// // {/ex-fact}
//
// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// // ruleid:squirrelly_autoescape
// Sqrl.autoEscaping(false)
// // {/ex-fact}
