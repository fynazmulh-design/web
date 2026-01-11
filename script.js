// ============================================
// ⚠️ ADMIN CONFIGURATION AREA
// ============================================
const CONFIG = {
    // 1. YOUR UNIFIED GOOGLE APPS SCRIPT URL
    authScriptURL: "https://script.google.com/macros/s/AKfycbwor9BTwddVVaKodWV-1tjxTrBbRjlJNjEAf2yQEQF92neiZFxXpl9C7alqt6gaFHhCrg/exec", 
    vipScriptURL:  "https://script.google.com/macros/s/AKfycbwor9BTwddVVaKodWV-1tjxTrBbRjlJNjEAf2yQEQF92neiZFxXpl9C7alqt6gaFHhCrg/exec",

    noticeText: "🚀 Welcome to Freelancer Nazmul site! 🔥 Get 30% OFF on Yearly Plan! ⚡ Instant Activation with Bkash/Nagad/Rocket & Binance.After sending the money 💵 click on the Telegram icon below to send a message 📨 for the VIP code.",
    logoImageURL: "https://i.imgur.com/your-logo.png", 
    useImageLogo: false, 
    courses: [
        { title: "CPA Marketing", image: "https://ppcexpo.com/blog/wp-content/uploads/2024/10/what-is-cpa-in-marketing-1-1.jpg" },
        { title: "Ethical Hacking", image: "https://cdn2.mageplaza.com/media/blog/cpa-affiliate-marketing/cover.png" },
        { title: "Advance Data Entry", image: "https://e-laeltd.com/ela-admin/user/user_images/e-learning-and-earning-ltd-247985-CPA%20Marketing.jpg" },
        { title: "Python Automation", image: "https://www.avapartner.com/wp-content/uploads/2021/11/CPA.jpg" },
        { title: "Email Secret Master", image: "https://cpared.com/wp-content/uploads/2024/12/is-cpa-marketing-still-profitable-in-2025-2-1024x538.jpg" },
    ]
};

// 🔥 LINK DATA
const LINK_DATA = {
    cpa: [
        { name: "C3pa (Premium)", url: "https://cpazon.com" },
        { name: "Exnessoffer (Premium)", url: "https://aff.exnessoffer.com" },
        { name: "Cpagrip (Premium)", url: "https://www.cpagrip.com" },
        { name: "Adbluemedia (Premium)", url: "https://adbluemedia.com" },
        { name: "Affroyal (Premium)", url: "https://affroyal.com" },
        { name: "Cpaboss (Premium)", url: "https://dashboard.cpabossaffiliate.com" },
        { name: "Adbluemedia (Premium)", url: "https://cpamatica.io" },
        { name: "Nexussyner (Premium)", url: "https://www.nexussyner.com" },        
        { name: "Paysale (Premium)", url: "https://my.paysale.com" },
        { name: "Affizer (Premium)", url: "https://app.affizer.com" },
        { name: "C3pa (Premium)", url: "https://c3pa.net" },
        { name: "Mylead (Premium)", url: "https://pub.mylead.global" },
        { name: "Datify (Premium)", url: "https://datify.link/en/registration" },
        { name: "Pinpoint7 (Premium)", url: "https://pinpoint710086024.offer18.com" }
    ],
    ip: [
        { name: "Go2proxy {1 Gb - $1} = 260 Tk", url: "https://www.go2proxy.com" },
        { name: "Cliproxy {2 Gb - $2.90} = 510 Tk", url: "https://share.cliproxy.com/share/uyzacuaph" },
        { name: "Go2proxy {1 Gb - $1} = 260 Tk", url: "https://www.go2proxy.com" },
        { name: "Cherryproxy {5 Gb - $4} = 660 Tk", url: "https://center.cherryproxy.com/Login/Register?invite=f6803719" },
        { name: "Nodemaven {1 Gb - $4.70} = 730 Tk", url: "https://nodemaven.com/?a_aid=freelancernazmul" },
        { name: "Dataimpulse {5 Gb - $5} = 820 Tk", url: "https://dataimpulse.com/?aff=79223" },
        { name: "Proxyshare {10 Gb - $9} = 1350 Tk", url: "https://www.proxyshare.com/?invitation_code=CZ1DZX" },
        { name: "Piaproxy {5 Gb - $9} = 1350 Tk", url: "https://www.piaproxy.com/register?invitation_code=DGW10SU1" },
        { name: "922proxy {5 Gb - $10} = 1480 Tk", url: "https://www.922proxy.com/register?inviter_code=106eb74d" },
        { name: "Lumiproxy {10 Gb - $20} = 2800 Tk", url: "https://www.lumiproxy.com/?invite_code=3U904A" },
        { name: "Shopsocks5 {Day 80 Ip 30 Day - $8.40} = 1280 Tk", url: "https://shopsocks5.com/register.html?invite_code=57LSVEJM" }
    ],
    software: [
        { name: "Morelogin PC (Promo Code: AAlesSCxF5h6)", url: "https://www.morelogin.com" },
        { name: "GoLogin Mobile", url: "https://play.google.com/store/apps/details?id=com.gologin.gologin_mobile&pcampaignid=web_share" },
        { name: "Orbita Mobile", url: "https://play.google.com/store/apps/details?id=org.gologin.orbita&pcampaignid=web_share" }
    ]
};

// 🔥 VIDEO LINKS
const COURSE_VIDEOS = [
    { title: "Course: CPA Self SignUp", url: "https://www.youtube.com/embed/eSnDmLkKvlRcL33G" },
];

// ============================================
// 🔥 RAW DATA (ALL 5 TOOLS FULL DATA)
// ============================================
const uaData={versions:{browser:{'Chrome':'143.0.7559.31','Edge':'143.0.3650.96','Opera':'125.0.5729.49','Firefox':'146.0.1','Safari':'26.0'},social:{'Facebook':'543.0.0.55.73','Instagram':'410.1.0.63.71','TikTok':'43.9.5','LinkedIn':'4.1.1152','Twitter':'11.49.1','Snapchat':'13.72.0.55','WhatsApp':'2.25.37.77','YouTube':'20.51.39','Reddit':'2025.50.2','Telegram':'12.3.0'}},locales:{'US':{code:'en-US',iso:'US'},'UK':{code:'en-GB',iso:'GB'},'CA':{code:'en-CA',iso:'CA'},'AU':{code:'en-AU',iso:'AU'}},deviceDB:{'Samsung':['SM-S928B','SM-S928U','SM-S921B','SM-S918B','SM-G998B','SM-F946B','SM-A546B','SM-S948B','SM-S938B','SM-S931B','SM-A556B','SM-A356B','SM-A155F','SM-M556B'],'Google Pixel':['Pixel 9 Pro','Pixel 9','Pixel 8 Pro','Pixel 8','Pixel 7 Pro','Pixel 7a','Pixel 6 Pro','Pixel Fold','Pixel 9 Pro XL','Pixel 8a'],'OnePlus':['CPH2581','CPH2449','NE2210','LE2113','CPH2493','CPH2451','CPH2413','CPH2399','CPH2551','CPH2609'],'Motorola':['motorola edge 50 ultra','motorola edge 40 pro','motorola razr 50 ultra','moto g stylus 5G (2025)','moto g power 5G (2025)','motorola edge 30 ultra','moto g84 5G','moto g54 5G','motorola edge 40 neo','moto g24 power'],'Xiaomi':['2311DRK48C','2211133G','M2102K1G','23127PN0CC','23049PCD8G','23013PC75G','2210132G','22081212UG','2112123AG','2201116SG'],'Oppo':['CPH2551','CPH2499','PGEM10','PHN110','PHT110','PGU110','PGFM10','PHJ110','CPH2529','CPH2525'],'Vivo':['V2308','V2250','V2219','V2243','V2336','V2339','V2343','V2231','V2202','V2158'],'LG':['LM-V600','LM-G900','LM-G850','LM-G820','LM-V500','LM-V405','LM-Q730','LM-K920','LM-K520','LM-K420'],'Apple':['iPhone17,1','iPhone17,2','iPhone17,3','iPhone17,4','iPhone16,2','iPhone15,3','iPhone14,7','iPhone14,2','iPhone14,3','iPhone13,2','iPhone12,1','iPhone11,8','iPhone12,3','iPhone12,5']},countryBrands:{'US':['Samsung','Google Pixel','Motorola','OnePlus','Apple'],'UK':['Samsung','Google Pixel','Xiaomi','Oppo','Apple'],'CA':['Samsung','Google Pixel','LG','Motorola','Apple'],'AU':['Samsung','Google Pixel','Oppo','Vivo','Apple']},email:{maleNames:["James","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","Joshua","George","Kevin","Brian","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob","Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin","Samuel","Frank","Gregory","Raymond","Alexander","Patrick","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Adam","Henry","Nathan","Douglas","Zachary","Peter","Kyle","Walter","Ethan","Jeremy","Harold","Keith","Christian","Roger","Noah","Gerald","Carl","Terry","Sean","Austin","Arthur","Lawrence","Jesse","Dylan","Bryan","Joe","Jordan","Billy","Bruce","Albert","Willie","Gabriel","Logan","Alan","Juan","Wayne","Roy","Ralph","Randy","Eugene","Vincent","Russell","Louis","Philip","Bobby","Johnny","Bradley","Caleb"],femaleNames:["Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Nancy","Lisa","Margaret","Betty","Sandra","Ashley","Dorothy","Kimberly","Emily","Donna","Michelle","Carol","Amanda","Melissa","Deborah","Stephanie","Rebecca","Laura","Sharon","Cynthia","Kathleen","Amy","Shirley","Angela","Helen","Anna","Brenda","Pamela","Nicole","Samantha","Katherine","Emma","Ruth","Christine","Catherine","Debra","Rachel","Carolyn","Janet","Virginia","Maria","Heather","Diane","Julie","Joyce","Evelyn","Joan","Victoria","Kelly","Christina","Lauren","Frances","Martha","Judith","Cheryl","Megan","Andrea","Olivia","Ann","Jean","Alice","Jacqueline","Hannah","Doris","Kathryn","Gloria","Teresa","Sara","Janice","Marie","Julia","Grace","Judy","Theresa","Madison","Beverly","Denise","Marilyn","Amber","Danielle"],titles:["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts","Gomez", "Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson","Watson","Brooks","Chavez","Wood","James","Bennett","Gray","Mendoza","Ruiz","Hughes","Price","Alvarez","Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez"],domains:["gmail.com","outlook.com","yahoo.com","hotmail.com","icloud.com","aol.com","protonmail.com","zoho.com","yandex.com","mail.com"]},number:{'us':{code:'+1',prefixes:['212','310','415','305','702','202','312','281','718','323','646','917','512','214','713','972','832','347','929','346','469','682'],digits:7},'uk':{code:'+44',prefixes:['71','72','73','74','75','77','78','79'],digits:8},'bd':{code:'+880',prefixes:['17','13','19','14','18','16','15'],digits:8},'ca':{code:'+1',prefixes:['416','647','604','778','514','403','905','613','587','438','289','365'],digits:7},'au':{code:'+61',prefixes:['40','41','42','43','44','45','46','47','48'],digits:7},'de':{code:'+49',prefixes:['151','152','157','160','162','170','171','175','176','163'],digits:7},'fr':{code:'+33',prefixes:['6','7'],digits:8}},address:{US:{zip:"#####",states:{"California":["Los Angeles","San Francisco","San Diego","Sacramento","San Jose","Fresno"],"New York":["New York City","Buffalo","Rochester","Yonkers"],"Texas":["Houston","San Antonio","Dallas","Austin","Fort Worth"], "Florida":["Miami", "Orlando"]}},UK:{zip:"??# #??",states:{"England":["London","Manchester","Birmingham","Liverpool","Leeds","Bristol"], "Scotland":["Glasgow"]}},CA:{zip:"?#? #?#",states:{"Ontario":["Toronto","Ottawa","Mississauga","Brampton"], "Quebec":["Montreal"]}},AU:{zip:"####",states:{"New South Wales":["Sydney","Newcastle"], "Victoria":["Melbourne"]}}},streets:["Main St","High St","Church St","King St","Queen St","Park Rd","Victoria Rd","Station Rd","London Rd","George St","Broadway","Maple Ave","Oak St","Washington St","Lakeview Dr","Sunset Blvd","River Rd","Pine St","Cedar Ln","Elm St","5th Avenue"]};

// HELPERS
const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getBuild = () => rnd(['UP1A.231005.007', 'TP1A.220624.014', 'SP1A.210812.016', 'UKQ1.230924.001']);
const getChromeVer = () => `143.0.${Math.floor(Math.random()*5000)}.${Math.floor(Math.random()*150)}`;
function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];
const commonNumbers = ["123", "007", "101", "1", "99", "88", "55", "777", "24", "365"];

// ============================================
// MAIN LOGIC STARTS
// ============================================
let isLoggedIn = false;
let currentTool = null;


window.onload = function() {
    setupSite();
    checkLoginStatus();
};

function setupSite() {
    const imgLogo = document.getElementById('imgLogo');
    const textLogo = document.getElementById('textLogo');
    if (CONFIG.useImageLogo && CONFIG.logoImageURL) { imgLogo.src = CONFIG.logoImageURL; imgLogo.classList.remove('hidden'); textLogo.classList.add('hidden'); } 
    else { imgLogo.classList.add('hidden'); textLogo.classList.remove('hidden'); }
    
    document.getElementById('noticeText').innerText = CONFIG.noticeText;

    const courseHTML = [...CONFIG.courses, ...CONFIG.courses].map(course => `
        <div class="marquee-item group relative">
            <img src="${course.image}" alt="${course.title}">
            <div class="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-3 text-center">
                <span class="font-bold text-white text-xs sm:text-sm whitespace-normal">${course.title}</span>
            </div>
        </div>
    `).join('');
    
    if(document.getElementById('publicCourseMarquee')) document.getElementById('publicCourseMarquee').innerHTML = courseHTML;
    if(document.getElementById('dashboardCourseMarquee')) document.getElementById('dashboardCourseMarquee').innerHTML = courseHTML;
    if(document.getElementById('heroCourseMarquee')) document.getElementById('heroCourseMarquee').innerHTML = courseHTML;
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (user && user.isLoggedIn) {
        isLoggedIn = true;
        document.getElementById('publicHero').classList.add('hidden');
        document.getElementById('hero-marquee').classList.add('hidden'); 
        document.getElementById('public-tools').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        document.getElementById('menuPublic').classList.add('hidden');
        document.getElementById('menuPrivate').classList.remove('hidden');
        
        const navBtn = document.getElementById('navAuthBtn');
        navBtn.innerHTML = `<i class="ph ph-sign-out mr-1.5"></i> Logout`;
        navBtn.classList.replace('bg-white/10', 'bg-red-600');
        navBtn.onclick = logout;

        document.getElementById('dashUserName').innerText = user.name || "User";
        
        // 🚀 AUTO SYNC CALL
        syncUserPlan(user);
    }
}

function syncUserPlan(user) {
    updateUIBasedOnPlan(user.plan); // Show Local First
    
    fetch(`${CONFIG.vipScriptURL}?action=check_status&email=${user.email}`)
    .then(res => res.json())
    .then(data => {
        if (data.result === 'success' && data.plan && data.plan !== 'Free') {
            user.plan = data.plan;
            localStorage.setItem('proToolsUser', JSON.stringify(user));
            updateUIBasedOnPlan(data.plan);
        }
    })
    .catch(err => console.error("Sync Error", err));
}

function updateUIBasedOnPlan(plan) {
    updatePlanBadge(plan);
    
    // 🔥 GUIDE BUTTON VS TELEGRAM BUTTON LOGIC
    const telegramLink = "https://t.me/+vurs_IdenTE4M2Zl";
    const guideLink = "https://youtube.com/your-guide-link"; // ইউটিউব ভিডিও লিংক এখানে

    const publicBtn = document.getElementById('publicGuideBtn');
    const dashBtn = document.getElementById('dashGuideBtn');
    const publicText = document.getElementById('publicGuideText');
    const dashText = document.getElementById('dashGuideText');

    if (plan && plan !== 'Free') {
        // ✅ USER IS VIP -> SHOW TELEGRAM BUTTON
        document.getElementById('course-packages').classList.add('hidden'); 
        document.getElementById('videoPlayerSection').classList.remove('hidden');
        renderCourseVideos(); 
        document.getElementById('redeemSection').classList.add('hidden');

        // Dashboard Button Update
        if(dashBtn) {
            dashBtn.onclick = function() { window.open(telegramLink, '_blank'); };
            dashBtn.classList.replace('from-blue-600', 'from-sky-500'); 
            dashBtn.classList.replace('to-cyan-600', 'to-blue-700');
            dashBtn.querySelector('i').className = "ph-fill ph-telegram-logo text-2xl"; 
            if(dashText) dashText.innerText = "Watch Video Course";
        }
        
        // Public Button Update
        if(publicBtn) {
            publicBtn.onclick = function() { window.open(telegramLink, '_blank'); };
            if(publicText) publicText.innerText = "Watch Video Course";
        }

    } else {
        // ❌ USER IS FREE -> SHOW GUIDE BUTTON
        document.getElementById('course-packages').classList.remove('hidden');
        document.getElementById('videoPlayerSection').classList.add('hidden');
        document.getElementById('redeemSection').classList.remove('hidden');

        // Reset Dashboard Button
        if(dashBtn) {
            dashBtn.onclick = function() { window.open(guideLink, '_blank'); };
            dashBtn.querySelector('i').className = "ph-fill ph-play-circle text-2xl";
            if(dashText) dashText.innerText = "Watch Tutorial / Guide";
        }
        
        // Reset Public Button
        if(publicBtn) {
            publicBtn.onclick = function() { window.open(guideLink, '_blank'); };
            if(publicText) publicText.innerText = "Watch Tutorial / Guide";
        }
    }
}

function renderCourseVideos() {
    const grid = document.getElementById('courseVideoGrid');
    grid.innerHTML = COURSE_VIDEOS.map(video => `
        <div class="video-card">
            <iframe src="${video.url}" allowfullscreen></iframe>
            <p>${video.title}</p>
        </div>
    `).join('');
}

function updatePlanBadge(plan) {
    const badge = document.getElementById('userPlanBadge');
    const dashPlan = document.getElementById('dashUserPlan');
    const isPremium = (plan && plan !== 'Free');
    
    badge.innerText = isPremium ? "PREMIUM" : "FREE";
    badge.className = `hidden md:inline-block text-[10px] px-2 py-0.5 rounded border font-mono font-bold ${isPremium ? "text-green-400 border-green-500/20 bg-green-500/10" : "text-red-400 border-red-500/20 bg-red-500/10 animate-pulse"}`;
    badge.classList.remove('hidden');
    
    dashPlan.innerText = isPremium ? `${plan} ✅` : "Locked 🔒";
    dashPlan.className = isPremium ? "text-green-400 font-bold" : "text-red-400 font-bold";

    const iconClass = isPremium ? "ph-arrow-square-out text-green-400" : "ph-lock-key text-gray-500";
    ['ua', 'email', 'validator', 'number', 'address', 'cpa', 'ip', 'software'].forEach(id => {
        const icon = document.getElementById(`lockIcon_${id}`);
        if(icon) icon.className = `ph ${iconClass} transition`;
    });
}

// Payment & Auth Functions
function openPaymentModal(planName, amount) {
    if (!isLoggedIn) { openAuthModal(); return; }
    const modal = document.getElementById('paymentModal');
    modal.classList.remove('hidden');
    document.getElementById('paymentStep1').classList.remove('hidden');
    document.getElementById('paymentStep2').classList.add('hidden');
    document.getElementById('payPackageName').innerText = planName;
    document.getElementById('payAmount').innerText = amount;
}

function handlePaymentSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";
    btn.disabled = true;
    setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        document.getElementById('paymentStep1').classList.add('hidden');
        document.getElementById('paymentStep2').classList.remove('hidden');
    }, 1500);
}

function redeemVipCode() {
    let codeInput = document.getElementById('vipCodeInput');
    if (!codeInput || codeInput.offsetParent === null) codeInput = document.getElementById('modalVipCode');
    const code = codeInput.value.trim();
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; }
    if (!code) { alert("⚠️ Please enter a code!"); return; }
    const data = new URLSearchParams();
    data.append('action', 'redeem');
    data.append('email', user.email);
    data.append('code', code);
    fetch(CONFIG.vipScriptURL, { method: 'POST', body: data }).then(res => res.json()).then(result => {
        if (result.result === 'success') {
            alert(`✅ Success! Activated: ${result.newPlan}`);
            // Update local storage
            user.plan = result.newPlan;
            localStorage.setItem('proToolsUser', JSON.stringify(user));
            // Update UI
            updateUIBasedOnPlan(result.newPlan);
            document.getElementById('paymentModal').classList.add('hidden');
            location.reload(); 
        } else { alert("❌ " + result.message); }
    }).catch(err => { alert("❌ Network/Server Error!"); console.error(err); });
}

// ============================================
// 🛠️ TOOL LOADERS & LOGIC
// ============================================
function loadTool(toolId) {
    currentTool = toolId;
    const consoleDiv = document.getElementById('toolConsole');
    const title = document.getElementById('activeToolName');
    const output = document.getElementById('consoleOutput');
    const controls = document.getElementById('toolControls');
    consoleDiv.classList.remove('hidden');
    window.scrollTo({ top: consoleDiv.offsetTop - 100, behavior: 'smooth' });
    output.innerHTML = ""; controls.innerHTML = "";

    // 🔗 LINK TOOLS
    if (['cpa', 'ip', 'software'].includes(toolId)) {
        let toolName = toolId === 'cpa' ? 'CPA Networks' : (toolId === 'ip' ? 'IP Lists' : 'Software Vault');
        let icon = toolId === 'cpa' ? 'ph-globe' : (toolId === 'ip' ? 'ph-globe-ip' : 'ph-hard-drives');
        title.innerHTML = `<i class="ph-fill ${icon} text-purple-400"></i> ${toolName}`;
        
        let linksHTML = LINK_DATA[toolId].map(link => `
            <div class="flex justify-between items-center bg-white/5 p-3 rounded border border-white/10 mb-2">
                <span class="text-sm font-bold text-gray-300">${link.name}</span>
                <a href="${link.url}" target="_blank" class="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded text-xs font-bold">Open Link <i class="ph-bold ph-arrow-square-out"></i></a>
            </div>
        `).join('');
        output.innerHTML = `<div class="mt-2">${linksHTML}</div>`;
        return;
    }

    if(toolId === 'ua') {
        title.innerHTML = `<i class="ph-fill ph-mask-happy text-purple-400"></i> User Agent Generator`;
        output.innerHTML = `<div class="generator-grid"><div><label class="gen-label">Target Country</label><select id="uaCountry" class="gen-input" onchange="updateUABrands()"><option value="US">USA</option><option value="UK">UK</option><option value="CA">Canada</option><option value="AU">Australia</option></select></div><div><label class="gen-label">OS Platform</label><select id="uaOS" class="gen-input" onchange="updateUABrands()"><option value="Android">Android</option><option value="iOS">iOS</option><option value="Windows">Windows</option><option value="macOS">macOS</option><option value="Random">Random Mix</option></select></div><div class="full-width"><label class="gen-label">Brand</label><select id="uaBrand" class="gen-input"></select></div><div><label class="gen-label">Environment</label><select id="uaEnv" class="gen-input" onchange="updateUAApps()"><option value="browser">Web Browser</option><option value="social">Social App</option></select></div><div><label class="gen-label">Browser/App</label><select id="uaApp" class="gen-input" onchange="updateUAVersion()"></select></div><div class="full-width"><label class="gen-label">Version</label><input type="text" id="uaVersion" class="gen-input" readonly style="color: #666;"></div><div><label class="gen-label">Quantity</label><input type="number" id="uaQty" class="gen-input" value="10" min="1" max="2000"></div></div><textarea id="uaResult" class="w-full h-32 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly placeholder="User Agents will appear here..."></textarea>`;
        controls.innerHTML = `<button onclick="runUAGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate UAs</button>`;
        setTimeout(() => { updateUABrands(); updateUAApps(); }, 100);
    }
    else if(toolId === 'email') {
        title.innerHTML = `<i class="ph-fill ph-envelope-open text-orange-400"></i> Email Generator`;
        output.innerHTML = `<div class="generator-grid"><div class="full-width"><label class="gen-label">Pattern</label><select id="emailPattern" class="gen-input"><option value="0">Name + Name</option><option value="1">Name.Name</option><option value="2">Name + Year</option><option value="3">Name + Random</option></select></div><div class="full-width"><label class="gen-label">Quantity</label><input type="number" id="emailQty" class="gen-input" value="50" min="1" max="5000"></div></div><textarea id="emailResult" class="w-full h-48 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly></textarea>`;
        controls.innerHTML = `<button onclick="runEmailGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Emails</button>`;
    }
    else if(toolId === 'validator') {
        title.innerHTML = `<i class="ph-fill ph-shield-check text-green-400"></i> Email Validator`;
        output.innerHTML = `<textarea id="validInput" class="w-full h-24 bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono text-xs focus:outline-none" placeholder="Paste emails here (one per line)..."></textarea><div class="mt-4 h-40 overflow-y-auto"><table class="val-table"><thead><tr><th>Email</th><th>Status</th><th>Result</th></tr></thead><tbody id="validResult"></tbody></table></div>`;
        controls.innerHTML = `<button onclick="runEmailValidator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Check MX Records</button>`;
    }
    else if(toolId === 'number') {
        title.innerHTML = `<i class="ph-fill ph-device-mobile text-purple-400"></i> Number Generator`;
        output.innerHTML = `<div class="generator-grid"><div><label class="gen-label">Country</label><select id="numCountry" class="gen-input"><option value="us">USA (+1)</option><option value="uk">UK (+44)</option><option value="bd">Bangladesh (+880)</option><option value="ca">Canada (+1)</option><option value="au">Australia (+61)</option><option value="de">Germany (+49)</option><option value="fr">France (+33)</option></select></div><div><label class="gen-label">Quantity</label><input type="number" id="numQty" class="gen-input" value="50"></div></div><textarea id="numResult" class="w-full h-40 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly></textarea>`;
        controls.innerHTML = `<button onclick="runNumberGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Numbers</button>`;
    }
    else if(toolId === 'address') {
        title.innerHTML = `<i class="ph-fill ph-map-pin text-yellow-400"></i> Address Generator`;
        output.innerHTML = `<div class="generator-grid"><div><label class="gen-label">Country</label><select id="addrCountry" class="gen-input" onchange="loadStates()"><option value="">-- Select Country --</option><option value="US">United States</option><option value="UK">United Kingdom</option><option value="CA">Canada</option><option value="AU">Australia</option></select></div><div><label class="gen-label">State</label><select id="addrState" class="gen-input" onchange="loadCities()"><option value="">Any State</option></select></div><div class="full-width"><label class="gen-label">City</label><select id="addrCity" class="gen-input"><option value="">Any City</option></select></div><div><label class="gen-label">Quantity</label><input type="number" id="addrQty" class="gen-input" value="5"></div></div><div id="addrResult" class="mt-4 space-y-2 h-40 overflow-y-auto text-xs text-gray-300"></div>`;
        controls.innerHTML = `<button onclick="runAddressGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Addresses</button>`;
    }
}

// Logic Functions (Address Gen Fixed)
function updateUABrands(){ const os=document.getElementById('uaOS').value; const c=document.getElementById('uaCountry').value; const b=document.getElementById('uaBrand'); b.innerHTML=''; if(os==='Android'){ let list=uaData.countryBrands[c]||uaData.countryBrands['US']; list.forEach(x=>b.add(new Option(x,x))); b.add(new Option('Random','Random')); } else if(os==='iOS'){ b.add(new Option('Apple','Apple')); } else { b.add(new Option('PC/Mac','PC')); } }
function updateUAApps(){ const env=document.getElementById('uaEnv').value; const app=document.getElementById('uaApp'); app.innerHTML=''; let list=env==='browser'?uaData.versions.browser:uaData.versions.social; Object.keys(list).forEach(k=>app.add(new Option(k,k))); app.add(new Option('Random','Random')); updateUAVersion(); }
function updateUAVersion(){ const env=document.getElementById('uaEnv').value; const app=document.getElementById('uaApp').value; const ver=document.getElementById('uaVersion'); ver.value=(app==='Random')?'Mixed':(env==='browser'?uaData.versions.browser[app]:uaData.versions.social[app]); }
function runUAGenerator(){ const qty=parseInt(document.getElementById('uaQty').value); const sCountry=document.getElementById('uaCountry').value; const sOS=document.getElementById('uaOS').value; const sBrand=document.getElementById('uaBrand').value; const sEnv=document.getElementById('uaEnv').value; const sApp=document.getElementById('uaApp').value; const loc=uaData.locales[sCountry].code; let output=new Set(); let safe=0; while(output.size<qty && safe<qty*20){ safe++; let os=sOS==='Random'?rnd(['Android','iOS','Windows','macOS']):sOS; let brand=sBrand; if(os==='Android'){ if(sOS==='Random') brand=rnd(uaData.countryBrands['US'].filter(x=>x!=='Apple')); else if(brand==='Random') brand=rnd(uaData.countryBrands[sCountry].filter(x=>x!=='Apple')); } let model=(os==='Android')?rnd(uaData.deviceDB[brand]||uaData.deviceDB['Samsung']):rnd(uaData.deviceDB['Apple']); let appKeys=sEnv==='browser'?Object.keys(uaData.versions.browser):Object.keys(uaData.versions.social); let app=sApp==='Random'?rnd(appKeys):sApp; let ver=sEnv==='browser'?uaData.versions.browser[app]:uaData.versions.social[app]; let androidVer=rnd(['12','13','14']); let build=getBuild(); let cv=getChromeVer(); let iosVer=rnd(['18_3_2','18_2_1','17_5_1']); let ua=""; if(os==='Android'){ let baseWv=`Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build}; wv)`; let baseBrowser=`Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build})`; if(sEnv==='browser'){ if(app==='Chrome') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Mobile Safari/537.36`; else if(app==='Firefox') ua=`Mozilla/5.0 (Android ${androidVer}; Mobile; ${model} Build/${build}; rv:146.0) Gecko/146.0 Firefox/${ver}`; else if(app==='Edge') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 EdgA/${ver}`; else if(app==='Opera') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 OPR/${ver}`; } else { let webviewCore=`${baseWv} AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/${cv} Mobile Safari/537.36`; if(app==='Facebook') ua=`${webviewCore} [FB_IAB/FB4A;FBAV/${ver};FBLC/${loc};FBMF/${brand};FBDV/${model};FBSV/${androidVer};]`; else ua=`${webviewCore} ${app}/${ver}`; } } else if(os==='iOS'){ if(sEnv==='browser'){ if(app==='Safari') ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ver} Mobile/15E148 Safari/604.1`; else ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${ver} Mobile/15E148 Safari/604.1`; } else { ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ${app}/${ver}`; } } else { let sys=os==='Windows'?`Windows NT ${rnd(['10.0','11.0'])}`:`Macintosh; Intel Mac OS X ${rnd(['14_5','15_1'])}`; ua=`Mozilla/5.0 (${sys}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Safari/537.36`; } if(ua) output.add(ua); } document.getElementById('uaResult').value=Array.from(output).join('\n'); }
function runEmailGenerator(){ const qty=parseInt(document.getElementById('emailQty').value); const pattern=parseInt(document.getElementById('emailPattern').value); let results=[]; let uniqueEmails=new Set(); let attempts=0; let maxAttempts=qty*10; while(results.length<qty && attempts<maxAttempts){ attempts++; const isMale=Math.random()<0.5; const genderLabel=isMale?"male":"female"; const firstName=isMale?getRandomItem(uaData.email.maleNames):getRandomItem(uaData.email.femaleNames); const lastName=getRandomItem(uaData.email.titles); let username=""; const cleanFirst=firstName.toLowerCase(); const cleanLast=lastName.toLowerCase(); const randomYear=getRandomItem(years); const randomNumber=getRandomItem(commonNumbers); if(pattern===0) username=cleanFirst+cleanLast; else if(pattern===1) username=cleanFirst+"."+cleanLast; else if(pattern===2) username=cleanFirst+cleanLast+randomYear; else username=cleanFirst+cleanLast+randomNumber; const domain=getRandomItem(uaData.email.domains); const fullEmail=`${username}@${domain}`; if(!uniqueEmails.has(fullEmail)){ uniqueEmails.add(fullEmail); results.push(`${genderLabel} : ${firstName} ${lastName} : ${fullEmail}`); } } document.getElementById('emailResult').value=results.join('\n'); }
async function runEmailValidator(){ const raw=document.getElementById('validInput').value; const emails=raw.split('\n').filter(e=>e.trim()); const tbody=document.getElementById('validResult'); tbody.innerHTML=''; for(let email of emails){ let domain=email.split('@')[1]; let isValid=false; try{ let res=await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`,{headers:{'Accept':'application/dns-json'}}); let data=await res.json(); if(data.Answer && data.Answer.length>0) isValid=true; }catch(e){} const statusHTML=isValid?'<span class="status-valid">MX Record Found</span>':'<span class="status-invalid">No MX Record</span>'; const resultText=isValid?'Valid Domain':'Invalid/Unreachable'; tbody.innerHTML+=`<tr><td>${email}</td><td>${statusHTML}</td><td>${resultText}</td></tr>`; } }
function runNumberGenerator(){ const country=document.getElementById('numCountry').value; const qty=parseInt(document.getElementById('numQty').value); const conf=uaData.number[country]; let uniqueNumbers=new Set(); while(uniqueNumbers.size<qty){ let prefix=rnd(conf.prefixes); let body=""; for(let i=0;i<conf.digits;i++){ body+=Math.floor(Math.random()*10); } uniqueNumbers.add(`${conf.code}${prefix}${body}`); } document.getElementById('numResult').value=Array.from(uniqueNumbers).join('\n'); }
function loadStates(){ const c=document.getElementById("addrCountry").value; const s=document.getElementById("addrState"); const ci=document.getElementById("addrCity"); s.innerHTML='<option value="">Any State / Region</option>'; ci.innerHTML='<option value="">Any City</option>'; if(c && uaData.address[c]){ Object.keys(uaData.address[c].states).sort().forEach(state=>{ const o=document.createElement("option"); o.value=state; o.text=state; s.appendChild(o); }); } }
function loadCities(){ const c=document.getElementById("addrCountry").value; const s=document.getElementById("addrState").value; const ci=document.getElementById("addrCity"); ci.innerHTML='<option value="">Any City</option>'; if(c && s && uaData.address[c].states[s]){ uaData.address[c].states[s].sort().forEach(city=>{ const o=document.createElement("option"); o.value=city; o.text=city; ci.appendChild(o); }); } }
function runAddressGenerator(){ const country=document.getElementById('addrCountry').value; const selectedState=document.getElementById('addrState').value; const selectedCity=document.getElementById('addrCity').value; const qty=parseInt(document.getElementById('addrQty').value); const div=document.getElementById('addrResult'); if(!country){ alert("Please select a country first."); return; } div.innerHTML=''; const conf=uaData.address[country]; for(let i=0;i<qty;i++){ let finalState=selectedState; let finalCity=selectedCity; if(!finalState) finalState=rnd(Object.keys(conf.states)); if(!finalCity) finalCity=rnd(conf.states[finalState]); let streetName=rnd(uaData.streets); let streetNum=Math.floor(Math.random()*999)+1; function generateZip(format){ const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; return format.replace(/#/g,()=>Math.floor(Math.random()*10)).replace(/\?/g,()=>letters.charAt(Math.floor(Math.random()*letters.length))); } let zip=generateZip(conf.zip); const cardHTML=`<div class="p-3 bg-white/5 rounded border border-white/5 mb-2 font-mono text-xs"><strong class="text-purple-400">Address #${i+1}</strong><br><span class="text-gray-300">${streetNum} ${streetName}<br>${finalCity}, ${finalState} ${zip}<br>${country}</span></div>`; div.innerHTML+=cardHTML; } }

// Auth Functions
function showSection(sectionId) { if(sectionId === 'dashboard' && isLoggedIn) { document.getElementById('home-section').classList.add('hidden'); document.getElementById('dashboard-section').classList.remove('hidden'); window.scrollTo(0,0); } }
function scrollToPricing() { document.getElementById('course-packages').scrollIntoView({ behavior: 'smooth' }); }
function openAuthModal(planInfo = 'Free') { if(isLoggedIn) return; document.getElementById('authModal').classList.remove('hidden'); document.getElementById('selectedPlan').value = planInfo; if (planInfo !== 'Free') switchTab('register'); else switchTab('login'); }
function closeAuthModal() { document.getElementById('authModal').classList.add('hidden'); document.getElementById('authMessage').classList.add('hidden'); }
function switchTab(tab) { const loginForm = document.getElementById('loginForm'); const registerForm = document.getElementById('registerForm'); const tabLogin = document.getElementById('tabLogin'); const tabRegister = document.getElementById('tabRegister'); if (tab === 'login') { loginForm.classList.remove('hidden'); registerForm.classList.add('hidden'); tabLogin.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-purple-500 bg-white/5"; tabRegister.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white"; } else { loginForm.classList.add('hidden'); registerForm.classList.remove('hidden'); tabRegister.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-purple-500 bg-white/5"; tabLogin.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white"; } }
function handleAuth(event, action) { event.preventDefault(); const form = event.target; const formData = new FormData(form); const msgDiv = document.getElementById('authMessage'); const btn = form.querySelector('button[type="submit"]'); const originalText = btn.innerText; btn.innerText = "Processing..."; btn.disabled = true; msgDiv.classList.add('hidden'); const data = new URLSearchParams(); data.append('action', action); for (const pair of formData) data.append(pair[0], pair[1]); fetch(CONFIG.authScriptURL, { method: 'POST', body: data }).then(res => res.json()).then(result => { msgDiv.classList.remove('hidden'); if (result.result === 'success') { msgDiv.className = "px-8 pb-6 text-center text-xs font-bold text-green-400"; msgDiv.innerText = result.message; if (action === 'login') { const userData = { isLoggedIn: true, name: result.userData?.name, email: result.userData?.email, plan: result.userData?.plan || "Free" }; localStorage.setItem('proToolsUser', JSON.stringify(userData)); setTimeout(() => { closeAuthModal(); location.reload(); }, 1000); } else { form.reset(); setTimeout(() => { switchTab('login'); msgDiv.innerText = "Registration Success! Please Login."; }, 2000); } } else { msgDiv.className = "px-8 pb-6 text-center text-xs font-bold text-red-400"; msgDiv.innerText = result.message; } }).catch(err => { msgDiv.innerText = "Connection Failed."; }).finally(() => { btn.innerText = originalText; btn.disabled = false; }); }
function logout() { localStorage.removeItem('proToolsUser'); location.reload(); }
function togglePassword(inputId, icon) { const input = document.getElementById(inputId); if (input.type === "password") { input.type = "text"; icon.classList.remove('ph-eye'); icon.classList.add('ph-eye-slash'); } else { input.type = "password"; icon.classList.remove('ph-eye-slash'); icon.classList.add('ph-eye'); } }
function checkAccess(toolId) { const user = JSON.parse(localStorage.getItem('proToolsUser')); if (!user || !user.isLoggedIn) { alert("Please login first!"); return; } if (!user.plan || user.plan === 'Free') { document.getElementById('lockModal').classList.remove('hidden'); } else { loadTool(toolId); } }

// ============================================
// 🔥 DYNAMIC PAYMENT INFO UPDATE (New Feature)
// ============================================
function updatePayInfo() {
    const method = document.getElementById('payMethod').value;
    const payLabel = document.getElementById('payLabel');
    const payNumber = document.getElementById('payNumber');
    const senderLabel = document.getElementById('senderLabel');
    const senderInput = document.getElementById('senderInput');
    
    if (method === 'Binance') {
        // Binance Logic
        payLabel.innerText = "Binance Pay ID (Our ID)";
        payNumber.value = "745273700"; 
        senderLabel.innerText = "Binance Sender ID (Your Pay ID)";
        senderInput.placeholder = "Enter your Binance ID";
    } else {
        // Bkash/Nagad/Rocket Logic
        payLabel.innerText = "Payment Number (Our Number)";
        payNumber.value = "01780103303"; 
        senderLabel.innerText = "Sender Number (Your Number)";
        senderInput.placeholder = "01xxxxxxxxx";
    }
}





