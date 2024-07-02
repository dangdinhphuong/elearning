<template>
    <footer class="_wrapper_spbg1_1">
        <div class="container-fluid">
            <div class="row gy-xl-6">
                <div class="col col-3 col-xl-12">
                    <div>
                        <div class="_column-top_spbg1_25"><a href="/"><img class="_top-logo_spbg1_30"
                                    src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" alt="F8"></a>
                            <h2 class="_top-slogan_spbg1_37">Học Lập Trình Để Đi Làm</h2>
                        </div>
                        <p class="_contact-list_spbg1_58"><b>Điện thoại:</b> <a
                                href="tel:0246.329.1102">0246.329.1102</a><br><b>Email:</b> <a
                                href="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</a><br><b>Địa
                                chỉ:</b> Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
                        <div><a href="https://www.dmca.com/Protection/Status.aspx?id=1b325c69-aeb7-4e32-8784-a0009613323a&amp;refurl=https%3a%2f%2ffullstack.edu.vn%2f&amp;rlo=true"
                                target="_blank" rel="noreferrer" title="DMCA Protected"><img class="_dmca_spbg1_96"
                                    src="data:image/png;base64,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"
                                    alt="DMCA"></a></div>
                    </div>
                </div>
                <div class="col col-2 col-xl-4 col-sm-12">
                    <div>
                        <h2 class="_heading_spbg1_43">Về F8</h2>
                        <ul class="_list_spbg1_72">
                            <li><a class="" href="/about-us">Giới thiệu</a></li>
                            <li><a class="" href="/contact-us">Liên hệ</a></li>
                            <li><a class="" href="/terms">Điều khoản</a></li>
                            <li><a class="" href="/privacy">Bảo mật</a></li>
                            <li><a class="" href="/careers">Cơ hội việc làm</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col col-2 col-xl-4 col-sm-12">
                    <div>
                        <h2 class="_heading_spbg1_43">Sản phẩm</h2>
                        <ul class="_list_spbg1_72">
                            <li><a href="https://nester.fullstack.edu.vn" target="_blank" rel="noreferrer">Game
                                    Nester</a></li>
                            <li><a href="https://css-diner.fullstack.edu.vn" target="_blank" rel="noreferrer">Game
                                    CSS Diner</a></li>
                            <li><a href="https://css-selectors-cheatsheet.fullstack.edu.vn" target="_blank"
                                    rel="noreferrer">Game CSS Selectors</a></li>
                            <li><a href="https://froggy.fullstack.edu.vn" target="_blank" rel="noreferrer">Game
                                    Froggy</a></li>
                            <li><a href="https://froggy-pro.fullstack.edu.vn" target="_blank" rel="noreferrer">Game
                                    Froggy Pro</a></li>
                            <li><a href="https://css-scoops.fullstack.edu.vn" target="_blank" rel="noreferrer">Game
                                    Scoops</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col col-2 col-xl-4 col-sm-12">
                    <div>
                        <h2 class="_heading_spbg1_43">Công cụ</h2>
                        <ul class="_list_spbg1_72">
                            <li><a href="https://cv.fullstack.edu.vn/" target="_blank" rel="noreferrer">Tạo CV xin
                                    việc</a></li>
                            <li><a class="" href="/shorten-urls">Rút gọn liên kết</a></li>
                            <li><a href="https://clippy.fullstack.edu.vn/" target="_blank" rel="noreferrer">Clip-path
                                    maker</a></li>
                            <li><a href="https://snippet-generator.fullstack.edu.vn/" target="_blank"
                                    rel="noreferrer">Snippet generator</a></li>
                            <li><a href="https://grid.fullstack.edu.vn/" target="_blank" rel="noreferrer">CSS Grid
                                    generator</a></li>
                            <li><a href="https://botayra.fullstack.edu.vn/" target="_blank" rel="noreferrer">Cảnh
                                    báo sờ tay lên mặt</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col col-3 col-xl-12">
                    <div>
                        <h2 class="_heading_spbg1_43"><a target="_blank"
                                href="https://www.google.com/search?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+C%C3%94NG+NGH%E1%BB%86+GI%C3%81O+D%E1%BB%A4C+F8"
                                rel="noreferrer">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</a></h2>
                        <ul class="_list_spbg1_72">
                            <li><b>Mã số thuế:</b> 0109922901</li>
                            <li><b>Ngày thành lập:</b> 04/03/2022</li>
                            <li><b>Lĩnh vực hoạt động:</b> Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây
                                dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt
                                Nam.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-12">
                    <div class="_bottom_spbg1_100">
                        <p class="_copyright_spbg1_114">© 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
                        </p>
                        <div class="_social-list_spbg1_119"><a
                                class="_social-item_spbg1_124 social-item-first _youtube_spbg1_128"
                                title="F8 trên Youtube" target="_blank" rel="noreferrer"><svg aria-hidden="true"
                                    focusable="false" data-prefix="fab" data-icon="square-youtube"
                                    class="svg-inline--fa fa-square-youtube " role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z">
                                    </path>
                                </svg></a><a class="_social-item_spbg1_124 _facebook_spbg1_131" title="F8 trên Facebook"
                                target="_blank" rel="noreferrer"><svg aria-hidden="true" focusable="false"
                                    data-prefix="fab" data-icon="square-facebook"
                                    class="svg-inline--fa fa-square-facebook " role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z">
                                    </path>
                                </svg></a><a class="_social-item_spbg1_124 _tiktok_spbg1_134" title="F8 trên Tiktok"
                                target="_blank" rel="noreferrer"><svg aria-hidden="true" focusable="false"
                                    data-prefix="fab" data-icon="tiktok" class="svg-inline--fa fa-tiktok " role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z">
                                    </path>
                                </svg></a></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
