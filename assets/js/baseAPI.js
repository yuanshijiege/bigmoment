// 注意：每次调用$.get()或$.post()或$.ajax()的时候
// 会先调用ajaxPrefilter这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(option){
    option.url = 'http://api-breakingnews-web.itheima.net' + option.url
    console.log(option.url)
})