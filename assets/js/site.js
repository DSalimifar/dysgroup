const divisions = {
  manufacturing:{key:"manufacturing",number:"01",en:"MANUFACTURING",title:"صنایع تولیدی و چوب",lead:"طراحی، ساخت و نصب مصنوعات چوبی و MDF با توجه به نیاز، فضا و سلیقه مشتری.",intro:"در حوزه صنایع تولیدی و چوب، تمرکز فعالیت گروه بر طراحی، ساخت و نصب کابینت، کمد، تخت‌خواب و سایر مصنوعات MDF، لترون و چوب است. کیفیت اجرا، تناسب طراحی با فضای پروژه و تعهد در فرایند تحویل، اصول راهنمای این فعالیت هستند.",items:["طراحی و اجرای کابینت آشپزخانه","ساخت کمد دیواری و کمدهای سفارشی","طراحی و ساخت تخت‌خواب و مصنوعات چوبی","ساخت مصنوعات MDF و لترون","خدمات نصب و تکمیل پروژه"],color:"manufacturing",cta:"برای بررسی سفارش و دریافت اطلاعات بیشتر با ما تماس بگیرید."},
  services:{key:"services",number:"02",en:"PROFESSIONAL SERVICES",title:"خدمات مالی و حسابداری",lead:"خدمات حسابداری و مالیاتی برای نظم‌بخشی به امور مالی و پشتیبانی تصمیم‌های کسب‌وکار.",intro:"حوزه خدمات مالی و حسابداری با هدف کمک به کسب‌وکارها در مدیریت امور مالی، انجام تکالیف مالیاتی و بهبود نظم اطلاعات مالی فعالیت می‌کند. دامنه دقیق خدمات بر اساس نیاز هر مجموعه و توافق طرفین تعیین می‌شود.",items:["خدمات حسابداری و ثبت رویدادهای مالی","تهیه و تنظیم گزارش‌های مالی","خدمات و پیگیری امور مالیاتی","سامان‌دهی اسناد و اطلاعات مالی","پشتیبانی مالی متناسب با نیاز کسب‌وکار"],color:"services",cta:"برای بررسی نیاز مجموعه خود و دریافت مشاوره اولیه با ما در ارتباط باشید."},
  technology:{key:"technology",number:"03",en:"TECHNOLOGY & SOFTWARE",title:"فناوری و نرم‌افزار",lead:"عرضه و توسعه راهکارهای نرم‌افزاری در حوزه‌های حسابداری، مالی و اداری.",intro:"گروه D&Y-S در حوزه فناوری و نرم‌افزار، عرضه و توسعه راهکارهای کاربردی برای مدیریت فرایندهای مالی، حسابداری و اداری را دنبال می‌کند. DAVIYA ACCOUNT یکی از محصولات نرم‌افزاری این مجموعه است که وب‌سایت مستقل خود را دارد.",items:["فروش نرم‌افزارهای حسابداری","راهکارهای نرم‌افزاری مالی و اداری","معرفی و توسعه محصولات دیجیتال","محصول شاخص: DAVIYA ACCOUNT"],color:"technology",cta:"برای آشنایی با محصول داویا، به وب‌سایت مستقل آن مراجعه کنید."},
  agriculture:{key:"agriculture",number:"04",en:"AGRICULTURE & FOOD",title:"کشاورزی و محصولات غذایی",lead:"توسعه فعالیت‌های کشاورزی با تمرکز بر تولید، بسته‌بندی و فروش برنج ایرانی.",intro:"حوزه کشاورزی و محصولات غذایی با تمرکز بر زنجیره ارزش برنج ایرانی تعریف شده است؛ از تولید و تأمین محصول تا بسته‌بندی و عرضه. هدف، توسعه فعالیتی مسئولانه با توجه به کیفیت محصول، اصالت و شفافیت در عرضه است.",items:["تولید و تأمین برنج ایرانی","بسته‌بندی محصولات برنج","فروش و عرضه برنج ایرانی","توسعه زنجیره تأمین و توزیع محصولات کشاورزی"],color:"agriculture",cta:"برای همکاری و دریافت اطلاعات درباره محصولات کشاورزی با ما تماس بگیرید."}
};
const basePath = location.pathname.includes("/pages/") ? "../" : "";
const pagePath = (name) => `${basePath}pages/${name}`;
const header = `
<header class="site-header"><div class="container nav-wrap">
<a class="brand" href="${basePath}index.html" aria-label="DYS Group صفحه اصلی"><span class="brand-mark">D<span>&</span>Y-S</span><span class="brand-name"><strong>DYS GROUP</strong><small>BUSINESS GROUP</small></span></a>
<button class="menu-toggle" aria-label="باز کردن منو" aria-expanded="false">☰</button>
<nav class="main-nav" aria-label="منوی اصلی">
<a href="${basePath}index.html">خانه</a>
<a href="${pagePath("about.html")}">درباره گروه</a>
<div class="nav-drop"><button type="button" aria-expanded="false">حوزه‌های فعالیت</button><div class="mega-menu">
${Object.values(divisions).map(d=>`<a class="mega-item" href="${pagePath(`division.html?id=${d.key}`)}"><i class="mega-dot" style="--accent:var(--${d.color})"></i><span><strong>${d.title}</strong><small>${d.en}</small></span></a>`).join("")}
</div></div>
<a href="${pagePath("companies.html")}">شرکت‌ها و محصولات</a><a href="${pagePath("news.html")}">اخبار</a><a href="${pagePath("careers.html")}">فرصت‌های همکاری</a>
</nav>
<a class="nav-cta" href="${pagePath("contact.html")}">تماس با ما <span>←</span></a>
</div></header>`;
const footer = `
<footer class="site-footer"><div class="container">
<div class="footer-grid">
<div class="footer-about"><a class="brand" href="${basePath}index.html"><span class="brand-mark">D<span>&</span>Y-S</span><span class="brand-name"><strong>DYS GROUP</strong><small>BUSINESS GROUP</small></span></a><p>گروهی چندرشته‌ای با چشم‌انداز توسعه پایدار؛ فعال در حوزه‌های صنایع تولیدی و چوب، خدمات مالی، فناوری و کشاورزی.</p></div>
<div><h3 class="footer-title">دسترسی سریع</h3><div class="footer-links"><a href="${pagePath("about.html")}">درباره گروه</a><a href="${pagePath("divisions.html")}">حوزه‌های فعالیت</a><a href="${pagePath("companies.html")}">شرکت‌ها و محصولات</a><a href="${pagePath("news.html")}">اخبار و رسانه</a><a href="${pagePath("careers.html")}">فرصت‌های همکاری</a></div></div>
<div><h3 class="footer-title">حوزه‌های فعالیت</h3><div class="footer-links">${Object.values(divisions).map(d=>`<a href="${pagePath(`division.html?id=${d.key}`)}">${d.title}</a>`).join("")}</div></div>
<div><h3 class="footer-title">ارتباط با گروه</h3><div class="footer-contact-line"><b>تلفن:</b><br><a href="tel:02133301277">۰۲۱-۳۳۳۰۱۲۷۷</a></div><div class="footer-contact-line"><b>ایمیل:</b><br><a href="mailto:info@dysgroup.ir">info@dysgroup.ir</a></div><div class="footer-contact-line"><b>نشانی:</b><br>تهران، اوقاف، بلوار کرج (آزادگان)، خیابان شهید جهانشاهلو، پلاک ۴۷۸، طبقه همکف</div></div>
</div>
<div class="footer-bottom"><span>© <span id="year"></span> D&Y-S | DYS GROUP — تمامی حقوق محفوظ است.</span><span>BUILT ON EXPERTISE · MOVING TOWARD SUSTAINABILITY</span></div>
</div></footer>`;
document.getElementById("site-header")?.insertAdjacentHTML("afterbegin",header);
document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin",footer);
document.getElementById("year")?.replaceChildren(document.createTextNode(new Date().getFullYear()));
const toggle=document.querySelector(".menu-toggle");
toggle?.addEventListener("click",()=>{const nav=document.querySelector(".main-nav");const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});
document.querySelectorAll(".nav-drop>button").forEach(btn=>btn.addEventListener("click",()=>{if(innerWidth<=760){const parent=btn.parentElement;const open=parent.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));}}));
const params=new URLSearchParams(location.search);
if(document.body.dataset.page==="division"){
 const d=divisions[params.get("id")]||divisions.manufacturing;
 document.title=`${d.title} | DYS GROUP`;
 document.getElementById("division-content").innerHTML=`
 <section class="page-hero"><div class="container"><div class="breadcrumb"><a href="${basePath}index.html">خانه</a> / <a href="${pagePath("divisions.html")}">حوزه‌های فعالیت</a> / ${d.title}</div><div class="eyebrow"><span class="eyebrow-line"></span> ${d.number} / ${d.en}</div><h1>${d.title}</h1><p>${d.lead}</p></div></section>
 <section class="content-section division-detail ${d.color}"><div class="container content-narrow"><div class="detail-panel"><h2>معرفی حوزه</h2><p>${d.intro}</p><h2 style="margin-top:28px">زمینه‌های فعالیت</h2><div class="detail-points">${d.items.map(x=>`<div class="detail-point">${x}</div>`).join("")}</div></div>
 <div class="related-box"><div><strong>گفت‌وگو درباره همکاری</strong><p>${d.cta}</p></div><a class="btn btn-gold" href="${pagePath("contact.html")}">ارتباط با ما ←</a></div>
 <p class="form-hint" style="margin-top:22px"><a href="${pagePath("divisions.html")}" class="text-link">← بازگشت به همه حوزه‌ها</a></p></div></section>`;
}
if(document.body.dataset.page==="divisions"){
 document.getElementById("all-divisions").innerHTML=Object.values(divisions).map(d=>`<a class="division-card ${d.color}" href="${pagePath(`division.html?id=${d.key}`)}"><div class="card-top"><span>${d.number} / ${d.en}</span><span class="round-arrow">↖</span></div><div class="division-icon"><span style="font-size:28px;color:var(--accent)">✳</span></div><h3>${d.title}</h3><p>${d.lead}</p><span class="card-link">مشاهده جزئیات <b>←</b></span></a>`).join("");
}
const contactForm=document.querySelector("#contact-form");
contactForm?.addEventListener("submit",e=>{e.preventDefault();if(!contactForm.reportValidity())return;const fd=new FormData(contactForm);const subject=encodeURIComponent("پیام از وب‌سایت DYS GROUP: "+fd.get("subject"));const body=encodeURIComponent(`نام: ${fd.get("name")}\nشماره تماس: ${fd.get("phone")}\nموضوع: ${fd.get("subject")}\n\nمتن پیام:\n${fd.get("message")}`);location.href=`mailto:info@dysgroup.ir?subject=${subject}&body=${body}`;});
