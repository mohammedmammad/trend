<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <!--  <div class="col-md-6 col-xs-12 no-padding">
                    <div class="col-sm-12 col-xs-12">
                        <a href="{{url('/')}}" class="f_logo">
                            <img src="{{asset('website/dist/img/logo.webp')}}">
                        </a>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="foot1">
                            <h3 class="f-title">منصة هنا</h3>
                            <ul>
                                <li><a href="{{url('providers')}}">ابحث عن مقدم خدمة</a></li>
                                <li><a href="{{url('login_home')}}">انضم عن مقدم خدمة</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="foot1">
                            <h3 class="f-title">الدعم والمساعدة</h3>
                            <ul>
                                <li><a href="{{url('contact_us')}}">اتصل بنا</a></li>
                                <li><a href="{{url('repeated_questions')}}">الأسئلة المتكررة</a></li>
                                <li><a href="{{url('support')}}">الدعم و التواصل </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="foot1">
                            <h3 class="f-title">اهم الخدمات</h3>
                            <ul>
                                <li><a href="{{url('categories')}}">البرمجة والتكويد</a></li>
                                <li><a href="{{url('categories')}}">المحاماة والقانون</a></li>
                                <li><a href="{{url('categories')}}">الاستشارات الهندسية</a></li>
                                <li><a href="{{url('categories')}}">التقنية والإبداع</a></li>
                                <li><a href="{{url('categories')}}">مكتبة الصور والفيديوهات</a></li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <div class="col-md-12 social-footer mb15">
                    <!-- <h3 class="f-title">   الاشتراك في الإعلانات </h3> -->
                    <ul class="social">
                        <li><a href="https://wa.me/8567363" target="_blank"><span class="icon-wh"><i class="fab fa-whatsapp"></i></span></a></li>
                        <li><a href="www.twitter.com" target="_blank"><span class="icon-tw"><i class="fab fa-twitter"></i></span></a></li>
                        <li><a href="www.instagram.com" target="_blank"><span class="icon-ig"><i class="fab fa-instagram"></i></span></a></li>
                        <li><a href="www.facebook.com" target="_blank"><span class="icon-f"><i class="fab fa-facebook"></i></span></a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-xs-12 mb15">
                    <div class="foot1">

                        <!-- <p>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
                        </p> -->

                        <form class="foot_form" action="#">
                            <div class="form-group">
                                <label>انضم إلى النشرة الإخبارية</label>
                                <input type="email" class="form-control" placeholder="أدخل بريدك الإلكترونى">
                            </div>
                            <button type="submit">اشترك</button>
                        </form>
                    </div>
                </div>
                <div class="col-md-6 col-xs-12 mb15">
                    <form class="foot_form" action="#">
                        <div class="form-group">
                            <label> الاشتراك في الإعلانات  </label>
                            <input type="email" class="form-control" placeholder="أدخل بريدك الإلكترونى">
                        </div>
                        <button type="submit">اشترك</button>
                    </form>
                </div>
                <!-- <div class="col-md-2 col-xs-12">
                    <a href="{{url('/')}}" class="f_logo">
                        <img src="{{asset('website/dist/img/logo.webp')}}">
                    </a>
                </div> -->

            </div>
            <div class="copyright">
                جميع الحقوق محفوظة
                &copy; <span id="currentYear"></span>Hona.com
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>

