var images =[
    "random_selector/01.jpg","random_selector/02.jpg","random_selector/03.jpg","https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F228874%2F3e95d20b36732cde.jpg&width=427"
];
$(function(){
    //確認能夠知道使用者按了按鈕
    $("input").on("click",function(){
        // alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);

    });
});