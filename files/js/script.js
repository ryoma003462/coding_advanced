// アコーディオンメニュー設定
$(function () {
    $('.title_1').click(function () {
        $('.detail_1').slideToggle(300);
    })
})

$(function () {
    $('.title_2').click(function () {
        $('.detail_2').slideToggle(300);
    })
})

$(function () {
    $('.title_3').click(function () {
        $('.detail_3').slideToggle(300);
    })
})

$(function () {
    $('.menu-sp').click(function () {
        $('.header-sp-list').slideToggle(300);
    })
})


// スライドショー設定
const swiper = new Swiper(".swiper", {
    loop: true, // ループ
    speed: 800, // スライドの速さを少しゆっくりに(デフォルトは300)
    slidesPerView: 1, // 一度に表示する枚数
    breakpoints:{
        767:{
            slidesPerView:2
        }
    },
    autoplay: { // 自動再生
        delay: 5000, // 5秒後に次のスライド
        disableOnInteraction: true, // 矢印をクリックしたら自動再生を止める
    },
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});






// フェードイン設定
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

/* 最下部のフェードイン(余分なスクロール無し) */
$(function () {
    $(window).scroll(function () {
        $('.fadein-2').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass('active');
            }
        });
    });
});




