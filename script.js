// ============================================
// 🏆 FREELANCER NAZMUL - MASTER SCRIPT (V18) 🏆
// Backend: Google Sheets | Host: GitHub Pages
// ============================================

// ⚠️ আপনার Google Apps Script এর Web App URL এখানে বসান ⚠️
const CONFIG = {
    backendURL: "https://script.google.com/macros/s/AKfycbwv49zfBOFTbmoamPIUqNcnjkB4s1RdGWXuBzQLTIJd3_b7ls3ociGJ3MbkxRACa8S7DQ/exec"
};

// 🔥 LINK DATA (ALL PREMIUM LINKS INTACT)
const LINK_DATA = {
    cpa: [
        { name: "CpaZon (Fresh & Dating Offer/Minimum Payment $50)", url: "https://cpazon.com" },
        { name: "Exnessoffer (Fresh & Dating Offer/Minimum Payment $50)", url: "https://aff.exnessoffer.com/register?refer_id=1793" },
        { name: "Cpagrip (Fresh Offer/Minimum Payment $50)", url: "https://www.cpagrip.com/signup.php?ref=479249" },
        { name: "Adbluemedia (Premium)", url: "https://adbluemedia.com" },
        { name: "Affroyal (Premium)", url: "https://affroyal.com" },
        { name: "Cpaboss (Premium)", url: "https://dashboard.cpabossaffiliate.com" },
        { name: "Cpamatica (Premium)", url: "https://cpamatica.io" },
        { name: "Nexussyner (Premium)", url: "https://www.nexussyner.com" },        
        { name: "Paysale (Premium)", url: "https://my.paysale.com" },
        { name: "Affizer (Premium)", url: "https://app.affizer.com" },
        { name: "C3pa (Premium)", url: "https://c3pa.net" },
        { name: "Mylead (Premium)", url: "https://pub.mylead.global" },
        { name: "Datify (Premium)", url: "https://datify.link/en/registration" },
        { name: "Pinpoint7 (Premium)", url: "https://pinpoint710086024.offer18.com" }
    ],
    software: [
        { name: "Premium Software PC 👩‍💻👉", url: "https://drive.google.com/drive/folders/1bBfu9tHhkn34QiKMnV1UfOUXlI0ynHLF?usp=sharing" },
        { name: "Premium Software Mobile 👩‍💻👉", url: "https://drive.google.com/drive/folders/1rQjO7Rxu7sNJWPdQS3T7A6lRHHnK-0Hq?usp=sharing" }
    ],
    proxy: [
        { name: "Go2proxy {1 Gb - $1+ VAT - 3 Day} = 260 Tk", url: "https://www.go2proxy.com" },
        { name: "Cliproxy {2 Gb- $3+ VAT - 30 Day} =480 Tk", url: "https://share.cliproxy.com/share/uyzacuaph" },
        { name: "Nodemaven {1 Gb - $4.70+ VAT - 30 Day} = 730 Tk", url: "https://nodemaven.com/?a_aid=freelancernazmul" },
        { name: "Dataimpulse {5 Gb - $5+ VAT - 30 Day} = 820 Tk", url: "https://dataimpulse.com/?aff=79223" },
        { name: "711proxy {5 Gb - $6+ VAT - 30 Day} = 980 Tk", url: "https://www.711proxy.com/signup?code=EFFBC5" },
        { name: "Proxyshare {10 Gb - $10+ VAT - 30 Day} = 1400 Tk", url: "https://www.proxyshare.com/?invitation_code=CZ1DZX" },
        { name: "Privateproxy {10 Gb - $10+ VAT - 30 Day} = 1530 Tk", url: "https://app.privateproxy.me/from/169372" },
        { name: "Lumiproxy {10 Gb - $20+ VAT - 30 Day} = 2800 Tk", url: "https://www.lumiproxy.com/?invite_code=3U904A" },
        { name: "Proxy-Seller {10 Gb - $25+ VAT - 30 Day} = 3400 Tk", url: "https://proxy-seller.com" },
        { name: "Shopsocks5 {Day 80 Ip 30 Day - $8.40+ VAT - 30 Day} = 1280 Tk", url: "https://shopsocks5.com/register.html?invite_code=57LSVEJM" },
        { name: "Cliproxy {500 IPs Ip- $35+ VAT - 30 Day} = 4600 Tk", url: "https://share.cliproxy.com/share/uyzacuaph" }
    ],
    address: [
        { name: "All Country Address Site 👩‍💻👉", url: "https://www.ssa.gov/locator/results?q=new%20york%201001" },
        { name: "Address & Number Site 👩‍💻👉", url: "https://www.homes.com" },
        { name: "Address & Number Site 👩‍💻👉", url: "https://www.whitepages.com" },
        { name: "Address & Number Site 👩‍💻👉", url: "https://nuwber.com" },
        { name: "Address & Number Site 👩‍💻👉", url: "https://www.zillow.com" },
    ],   
    name: [
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://www.fantasynamegenerators.com" },
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://www.random-name-generator.com" },
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://www.duplichecker.com" },
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://fullnamegenerator.com" },
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://capitalizemytitle.com" },
        { name: "All Country Full Name Site 👩‍💻👉", url: "https://www.coolgenerator.com" },
    ]
};

// 🔥 BUNNY.NET VIDEO LINKS (EMBEDS)
const COURSE_VIDEOS = [
    { 
        title: "Class 1: CPA Self SignUp Mastery & Tools Setup", 
        // আপনার Bunny.net এর embed link এখানে বসাবেন 
        url: "https://player.mediadelivery.net/embed/631069/0bc51550-af74-4bc2-824a-8c0ee4af4446?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
    },
    // আরও ভিডিও চাইলে নিচে কমা (,) দিয়ে অ্যাড করতে পারবেন
    // { title: "Class 2: Name", url: "https://..." }
];

// 🔥 TOOLS DATA DATABASE (DO NOT TOUCH)
const uaData={versions:{browser:{'Chrome':'145.0.7632.117','Edge':'145.0.3800.82','Opera':'128.0.5807.37','Firefox':'147.0.4','Safari':'26.3'},social:{'Facebook':'549.0.0.61.62','Instagram':'418.0.0.51.77','TikTok':'43.9.16','LinkedIn':'4.1.1174','Twitter':'11.70.0','Snapchat':'13.82.0.44','WhatsApp':'2.26.8.73','YouTube':'21.09.266','Reddit':'2026.09.0','Telegram':'12.5.1'}},locales:{'US':{code:'en-US',iso:'US'},'UK':{code:'en-GB',iso:'GB'},'CA':{code:'en-CA',iso:'CA'},'AU':{code:'en-AU',iso:'AU'},'DE':{code:'de_DE',iso:'DE'},'FR':{code:'fr_FR',iso:'FR'},'IT':{code:'it_IT',iso:'IT'},'NZ':{code:'en_NZ',iso:'NZ'}},deviceDB:{'Samsung':['SM-S942U','SM-S942U1','SM-S947U','SM-S947U1','SM-S948U','SM-S948U1','SM-S928B','SM-S928U','SM-S921B','SM-S918B','SM-G998B','SM-F946B','SM-A546B','SM-S948B','SM-S938B','SM-S931B','SM-A556B','SM-A356B','SM-A155F','SM-M556B'],'Google Pixel':['Pixel 10a','Pixel 10 Pro Fold','Pixel 10 Pro XL','Pixel 10 Pro','Pixel 10','Pixel 9 Pro','Pixel 9','Pixel 8 Pro','Pixel 8','Pixel 7 Pro','Pixel 7a','Pixel 6 Pro','Pixel Fold','Pixel 9 Pro XL','Pixel 8a'],'OnePlus':['CPH2581','CPH2449','NE2210','LE2113','CPH2493','CPH2451','CPH2413','CPH2399','CPH2551','CPH2609'],'Motorola':['motorola edge 50 ultra','motorola edge 40 pro','motorola razr 50 ultra','moto g stylus 5G (2025)','moto g power 5G (2025)','motorola edge 30 ultra','moto g84 5G','moto g54 5G','motorola edge 40 neo','moto g24 power'],'Xiaomi':['2311DRK48C','2211133G','M2102K1G','23127PN0CC','23049PCD8G','23013PC75G','2210132G','22081212UG','2112123AG','2201116SG'],'Oppo':['CPH2551','CPH2499','PGEM10','PHN110','PHT110','PGU110','PGFM10','PHJ110','CPH2529','CPH2525'],'Vivo':['V2308','V2250','V2219','V2243','V2336','V2339','V2343','V2231','V2202','V2158'],'LG':['LM-V600','LM-G900','LM-G850','LM-G820','LM-V500','LM-V405','LM-Q730','LM-K920','LM-K520','LM-K420'],'Apple':['iPhone17,1','iPhone17,2','iPhone17,3','iPhone17,4','iPhone16,2','iPhone15,3','iPhone14,7','iPhone14,2','iPhone14,3','iPhone13,2','iPhone12,1','iPhone11,8','iPhone12,3','iPhone12,5']},countryBrands:{'US':['Samsung','Google Pixel','Motorola','OnePlus','Apple'],'UK':['Samsung','Google Pixel','Xiaomi','Oppo','Apple'],'CA':['Samsung','Google Pixel','LG','Motorola','Apple'],'AU':['Samsung','Google Pixel','Oppo','Vivo','Apple'],'DE':['Samsung','Google Pixel','Xiaomi','Oppo','Apple'],'FR':['Samsung','Google Pixel','Xiaomi','Oppo','Apple'],'IT':['Samsung','Google Pixel','Xiaomi','Oppo','Apple'],'NZ':['Samsung','Google Pixel','Xiaomi','Oppo','Apple']},email:{maleNames:["James","Tyler","Mason","Kyle","Larry","Walter","Harold","Kevin","Adam","Bryan","Jacob","Kai","Jaxon","Albie","Daniel","Harrison","Hudson","Hunter","Oscar","Marceau","Noah","James","Ezio","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","Joshua","George","Kevin","Brian","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob","Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin","Samuel","Frank","Gregory","Raymond","Alexander","Patrick","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Adam","Henry","Nathan","Douglas","Zachary","Peter","Kyle","Walter","Ethan","Jeremy","Harold","Keith","Christian","Roger","Noah","Gerald","Carl","Terry","Sean","Austin","Arthur","Lawrence","Jesse","Dylan","Bryan","Joe","Jordan","Billy","Bruce","Albert","Willie","Gabriel","Logan","Alan","Juan","Wayne","Roy","Ralph","Randy","Eugene","Vincent","Charles","Ezio","Côme","Jacopo","Harrison","Grayson","Kai","Umberto","Leonardo","Lorenzo","Samuele","Pietro","Russell","Louis","Philip","Bobby","Johnny","Bradley","Caleb"],femaleNames:["Mary","Patricia","Jennifer","Rebecca","Linda","Patricia","Tiffany","Katherine","Angela","Rebecca","Lauren","Hannah","Hannah","Evelyn","Diane","Tiffany","Brenda","Melissa","Frances","Melissa","Ruth","Ann","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Nancy","Lisa","Margaret","Betty","Sandra","Ashley","Dorothy","Kimberly","Emily","Donna","Michelle","Carol","Amanda","Melissa","Deborah","Stephanie","Rebecca","Laura","Sharon","Cynthia","Kathleen","Amy","Shirley","Angela","Helen","Anna","Brenda","Pamela","Nicole","Samantha","Katherine","Emma","Ruth","Christine","Catherine","Debra","Rachel","Carolyn","Janet","Virginia","Maria","Heather","Diane","Julie","Joyce","Evelyn","Joan","Victoria","Kelly","Christina","Lauren","Frances","Martha","Judith","Cheryl","Megan","Andrea","Olivia","Ann","Jean","Alice","Jacqueline","Hannah","Doris","Kathryn","Gloria","Teresa","Sara","Janice","Marie","Julia","Grace","Judy","Theresa","Madison","Beverly","Denise","Marilyn","Amber","Danielle"],titles:["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts","Gomez", "Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson","Watson","Brooks","Chavez","Wood","James","Bennett","Gray","Mendoza","Ruiz","Hughes","Price","Alvarez","Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez"],domains:["gmail.com","outlook.com","yahoo.com","hotmail.com","icloud.com","aol.com","protonmail.com","zoho.com","yandex.com","mail.com"]},number:{'us':{code:'+1',prefixes:['212','310','415','305','702','202','312','281','718','323','646','917','512','214','713','972','832','347','929','346','469','682'],digits:7},'uk':{code:'+44',prefixes:['71','72','73','74','75','77','78','79'],digits:8},'bd':{code:'+880',prefixes:['17','13','19','14','18','16','15'],digits:8},'ca':{code:'+1',prefixes:['416','647','604','778','514','403','905','613','587','438','289','365'],digits:7},'au':{code:'+61',prefixes:['40','41','42','43','44','45','46','47','48'],digits:7},'de':{code:'+49',prefixes:['151','152','157','160','162','170','171','175','176','163'],digits:7},'fr':{code:'+33',prefixes:['6','7'],digits:8}},address:{US:{zip:"#####",states:{"California":["Los Angeles","San Francisco","San Diego","Sacramento","San Jose","Fresno"],"New York":["New York City","Buffalo","Rochester","Yonkers"],"Texas":["Houston","San Antonio","Dallas","Austin","Fort Worth"], "Florida":["Miami", "Orlando"]}},UK:{zip:"??# #??",states:{"England":["London","Manchester","Birmingham","Liverpool","Leeds","Bristol"], "Scotland":["Glasgow"]}},CA:{zip:"?#? #?#",states:{"Ontario":["Toronto","Ottawa","Mississauga","Brampton"], "Quebec":["Montreal"]}},AU:{zip:"####",states:{"New South Wales":["Sydney","Newcastle"], "Victoria":["Melbourne"]}}},streets:["Main St","High St","Church St","King St","Queen St","Park Rd","Victoria Rd","Station Rd","London Rd","George St","Broadway","Maple Ave","Oak St","Washington St","Lakeview Dr","Sunset Blvd","River Rd","Pine St","Cedar Ln","Elm St","5th Avenue"]};

// Helper Functions
const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getBuild = () => rnd(['UP1A.231005.007', 'TP1A.220624.014', 'SP1A.210812.016', 'UKQ1.230924.001']);
const getChromeVer = () => `145.0.${Math.floor(Math.random()*5000)}.${Math.floor(Math.random()*150)}`;
function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];
const commonNumbers = ["123", "007", "101", "1", "99", "88", "55", "777", "24", "365"];

let isLoggedIn = false;
let currentTool = null;
let countdownInterval;

window.onload = function() {
    checkLoginStatus();
};

// ============================================
// SYSTEM AUTH & STATE MANAGEMENT
// ============================================

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (user && user.isLoggedIn) {
        isLoggedIn = true;
        document.getElementById('home-section').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        
        const navBtn = document.getElementById('navAuthBtn');
        navBtn.innerHTML = `<i class="ph-bold ph-sign-out mr-1.5"></i> Logout`;
        navBtn.classList.replace('bg-black', 'bg-red-600');
        navBtn.onclick = logout;

        document.getElementById('dashUserName').innerText = user.name || "Student";
        
        // Always sync with database on load to prevent local storage hacking
        syncUserPlan(user);
    }
}

function syncUserPlan(user) {
    const data = new URLSearchParams();
    data.append('action', 'check_status');
    data.append('email', user.email);
    
    fetch(CONFIG.backendURL, { method: 'POST', body: data })
    .then(res => res.json())
    .then(result => {
        if (result.result === 'success') {
            user.plan = result.plan;
            user.expiry = result.expiry || "";
            localStorage.setItem('proToolsUser', JSON.stringify(user));
            updateUIBasedOnPlan(user);
        } else {
            // Force logout if user deleted from DB
            logout();
        }
    })
    .catch(err => {
        console.error("Sync Error", err);
        updateUIBasedOnPlan(user); // fallback to local state if offline
    });
}

function updateUIBasedOnPlan(user) {
    const plan = user.plan;
    const isPremium = (plan && plan !== 'Free');
    
    const dashPlan = document.getElementById('dashPlanName');
    const vipCodeBox = document.getElementById('vipCodeBox');
    
    if (isPremium) {
        dashPlan.innerText = `${plan} ✅`;
        dashPlan.className = "text-green-400 font-bold";
        vipCodeBox.classList.add('hidden');
        
        // Show Videos
        document.getElementById('videoPlayerSection').classList.remove('hidden');
        renderCourseVideos();
        
        // Start Live Timer
        startCountdown(user.expiry);
        
        // Unlock all tools visually
        const iconClass = "ph-fill ph-check-circle text-green-400 text-xl";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software', 'address', 'name'].forEach(id => {
            const lockIcon = document.getElementById(`lock_${id}`);
            if(lockIcon) lockIcon.className = iconClass;
        });

    } else {
        dashPlan.innerText = "Locked (Free User) 🔒";
        dashPlan.className = "text-red-400 font-bold";
        vipCodeBox.classList.remove('hidden');
        
        // Hide Videos
        document.getElementById('videoPlayerSection').classList.add('hidden');
        
        // Stop Timer
        clearInterval(countdownInterval);
        document.getElementById('countdownTimer').innerHTML = `<div class="text-zinc-500 font-bold text-sm">Please activate a plan</div>`;
        
        // Lock all tools visually
        const iconClass = "ph-fill ph-lock-key text-zinc-600 text-xl";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software', 'address', 'name'].forEach(id => {
            const lockIcon = document.getElementById(`lock_${id}`);
            if(lockIcon) lockIcon.className = iconClass;
        });
    }
}

function renderCourseVideos() {
    const grid = document.getElementById('courseVideoGrid');
    grid.innerHTML = COURSE_VIDEOS.map(video => `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg p-2">
            <div class="video-container">
                <iframe src="${video.url}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen></iframe>
            </div>
            <p class="p-4 text-white font-bold text-sm bg-black/40 border-t border-zinc-800">${video.title}</p>
        </div>
    `).join('');
}

// ============================================
// LIVE COUNTDOWN TIMER LOGIC
// ============================================

function startCountdown(expiryTimestamp) {
    clearInterval(countdownInterval);
    const timerDiv = document.getElementById('countdownTimer');
    
    if (!expiryTimestamp) {
        timerDiv.innerHTML = `<div class="text-red-500 font-bold text-sm">Lifetime Access or Invalid Date</div>`;
        return;
    }

    function update() {
        const now = new Date().getTime();
        const distance = expiryTimestamp - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            timerDiv.innerHTML = '<div class="text-red-500 font-bold text-xl tracking-widest bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">EXPIRED</div>';
            
            // Re-sync with server to downgrade to free
            const user = JSON.parse(localStorage.getItem('proToolsUser'));
            if(user.plan !== 'Free') syncUserPlan(user);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        timerDiv.innerHTML = `
            <div class="bg-[#020617] border border-white/10 rounded-lg p-3 min-w-[70px] shadow-inner"><span class="text-2xl text-white font-mono font-black block">${days}</span><span class="text-[10px] text-zinc-500 font-bold">DAYS</span></div>
            <div class="text-zinc-600 font-black text-2xl">:</div>
            <div class="bg-[#020617] border border-white/10 rounded-lg p-3 min-w-[70px] shadow-inner"><span class="text-2xl text-white font-mono font-black block">${hours}</span><span class="text-[10px] text-zinc-500 font-bold">HRS</span></div>
            <div class="text-zinc-600 font-black text-2xl">:</div>
            <div class="bg-[#020617] border border-white/10 rounded-lg p-3 min-w-[70px] shadow-inner"><span class="text-2xl text-white font-mono font-black block">${minutes}</span><span class="text-[10px] text-zinc-500 font-bold">MIN</span></div>
        `;
    }
    
    update();
    countdownInterval = setInterval(update, 60000); // Updates every 1 minute
}

// ============================================
// VIP CODE REDEEM LOGIC
// ============================================

function redeemVipCode() {
    const codeInput = document.getElementById('vipCodeInput');
    const code = codeInput.value.trim();
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    
    if (!code) { alert("⚠️ Please enter a VIP code!"); return; }
    
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i>`;
    btn.disabled = true;

    const data = new URLSearchParams();
    data.append('action', 'redeem');
    data.append('email', user.email);
    data.append('code', code);
    
    fetch(CONFIG.backendURL, { method: 'POST', body: data })
    .then(res => res.json())
    .then(result => {
        if (result.result === 'success') {
            alert(`✅ Success! Activated: ${result.newPlan}`);
            user.plan = result.newPlan;
            user.expiry = result.newExpiry;
            localStorage.setItem('proToolsUser', JSON.stringify(user));
            updateUIBasedOnPlan(user);
            codeInput.value = '';
        } else { 
            alert("❌ " + result.message); 
        }
    })
    .catch(err => { alert("❌ Network Error!"); })
    .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
    });
}

// ============================================
// UI & MODAL FUNCTIONS
// ============================================

function openAuthModal(planInfo = 'Free') { 
    if(isLoggedIn) return; 
    document.getElementById('authModal').classList.remove('hidden'); 
    if (planInfo !== 'Free') switchTab('register'); 
    else switchTab('login'); 
}

function closeAuthModal() { 
    document.getElementById('authModal').classList.add('hidden'); 
    document.getElementById('authMessage').classList.add('hidden'); 
}

function switchTab(tab) { 
    const loginForm = document.getElementById('loginForm'); 
    const registerForm = document.getElementById('registerForm'); 
    const forgotForm = document.getElementById('forgotForm'); 
    const tabLogin = document.getElementById('tabLogin'); 
    const tabRegister = document.getElementById('tabRegister'); 
    
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    forgotForm.classList.add('hidden');
    
    if (tab === 'login') { 
        loginForm.classList.remove('hidden'); 
        tabLogin.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-violet-500 bg-white/5 transition"; 
        tabRegister.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition bg-black/40"; 
    } else if (tab === 'register') { 
        registerForm.classList.remove('hidden'); 
        tabRegister.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-violet-500 bg-white/5 transition"; 
        tabLogin.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition bg-black/40"; 
    } else if (tab === 'forgot') {
        forgotForm.classList.remove('hidden');
    }
}

function togglePassword(inputId, icon) { 
    const input = document.getElementById(inputId); 
    if (input.type === "password") { 
        input.type = "text"; icon.classList.remove('ph-eye'); icon.classList.add('ph-eye-slash'); 
    } else { 
        input.type = "password"; icon.classList.remove('ph-eye-slash'); icon.classList.add('ph-eye'); 
    } 
}

function logout() { 
    localStorage.removeItem('proToolsUser'); 
    location.reload(); 
}

function handleAuth(event, action) { 
    event.preventDefault(); 
    const form = event.target; 
    const formData = new FormData(form); 
    const msgDiv = document.getElementById('authMessage'); 
    const btn = form.querySelector('button[type="submit"]'); 
    const originalText = btn.innerText; 
    
    btn.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i> Processing...`; 
    btn.disabled = true; 
    msgDiv.classList.add('hidden'); 
    
    const data = new URLSearchParams(); 
    data.append('action', action); 
    for (const pair of formData) data.append(pair[0], pair[1]); 
    
    fetch(CONFIG.backendURL, { method: 'POST', body: data })
    .then(res => res.json())
    .then(result => { 
        msgDiv.classList.remove('hidden'); 
        if (result.result === 'success') { 
            msgDiv.className = "px-8 pb-6 text-center text-sm font-bold text-green-400 bg-black/20 pt-4 border-t border-white/5"; 
            msgDiv.innerText = result.message; 
            
            if (action === 'login') { 
                const userData = { isLoggedIn: true, name: result.userData.name, email: result.userData.email, plan: result.userData.plan, expiry: result.userData.expiry }; 
                localStorage.setItem('proToolsUser', JSON.stringify(userData)); 
                setTimeout(() => { closeAuthModal(); location.reload(); }, 1000); 
            } else if (action === 'register') { 
                form.reset(); 
                setTimeout(() => { switchTab('login'); msgDiv.innerText = "Registration Success! Please Login."; }, 2000); 
            } else {
                // Forgot Password Success
                form.reset();
            }
        } else { 
            msgDiv.className = "px-8 pb-6 text-center text-sm font-bold text-red-400 bg-black/20 pt-4 border-t border-white/5"; 
            msgDiv.innerText = result.message; 
        } 
    })
    .catch(err => { 
        msgDiv.classList.remove('hidden');
        msgDiv.className = "px-8 pb-6 text-center text-sm font-bold text-red-400 bg-black/20 pt-4 border-t border-white/5";
        msgDiv.innerText = "Connection Failed. Try again."; 
    })
    .finally(() => { 
        btn.innerText = originalText; 
        btn.disabled = false; 
    }); 
}

// ============================================
// PREMIUM TOOLS LOGIC
// ============================================

function checkAccess(toolId) { 
    const user = JSON.parse(localStorage.getItem('proToolsUser')); 
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; } 
    if (!user.plan || user.plan === 'Free') { document.getElementById('lockModal').classList.remove('hidden'); } 
    else { loadTool(toolId); } 
}

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
    if (['cpa', 'proxy', 'software', 'address', 'name'].includes(toolId)) {
        let toolName = "Links";
        if(toolId === 'cpa') toolName = "CPA Networks";
        if(toolId === 'proxy') toolName = "Premium Proxy Site Lists";
        if(toolId === 'software') toolName = "Software Vault";
        if(toolId === 'address') toolName = "Address & Number Site Lists";
        if(toolId === 'name') toolName = "Full Male & Female Name Site Lists";

        let icon = 'ph-globe';
        if(toolId === 'proxy') icon = 'ph-network';
        if(toolId === 'software') icon = 'ph-robot';
        if(toolId === 'address') icon = 'ph-map-pin';
        if(toolId === 'name') icon = 'ph-identification-card';
        
        title.innerHTML = `<i class="ph-fill ${icon} text-violet-400"></i> ${toolName}`;
        
        let linksHTML = LINK_DATA[toolId] ? LINK_DATA[toolId].map(link => `
            <div class="flex justify-between items-center bg-[#020617] p-4 rounded-lg border border-white/5 mb-3 hover:border-violet-500/50 transition group">
                <span class="text-sm font-bold text-gray-300 group-hover:text-white transition">${link.name}</span>
                <a href="${link.url}" target="_blank" class="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-xs font-black shadow-lg transition flex items-center gap-1.5 whitespace-nowrap">Open Link <i class="ph-bold ph-arrow-square-out"></i></a>
            </div>
        `).join('') : "<p class='text-gray-400'>No links available.</p>";
        
        output.innerHTML = `<div class="mt-2 w-full">${linksHTML}</div>`;
        return;
    }

    if(toolId === 'ua') {
        title.innerHTML = `<i class="ph-fill ph-mask-happy text-yellow-400"></i> User Agent Generator`;
        output.innerHTML = `<div class="generator-grid"><div><label class="gen-label">Target Country</label><select id="uaCountry" class="gen-input" onchange="updateUABrands()"><option value="US">USA</option><option value="UK">UK</option><option value="CA">Canada</option><option value="AU">Australia</option><option value="DE">Germany</option><option value="FR">France</option><option value="IT">Italy</option><option value="NZ">Newzealand</select></div><div><label class="gen-label">OS Platform</label><select id="uaOS" class="gen-input" onchange="updateUABrands()"><option value="Android">Android</option><option value="iOS">iOS</option><option value="Windows">Windows</option><option value="macOS">macOS</option><option value="Random">Random Mix</option></select></div><div class="full-width"><label class="gen-label">Brand</label><select id="uaBrand" class="gen-input"></select></div><div><label class="gen-label">Environment</label><select id="uaEnv" class="gen-input" onchange="updateUAApps()"><option value="browser">Web Browser</option><option value="social">Social App</option></select></div><div><label class="gen-label">Browser/App</label><select id="uaApp" class="gen-input" onchange="updateUAVersion()"></select></div><div class="full-width"><label class="gen-label">Version</label><input type="text" id="uaVersion" class="gen-input" readonly style="color: #666;"></div><div><label class="gen-label">Quantity</label><input type="number" id="uaQty" class="gen-input" value="10" min="1" max="2000"></div></div><textarea id="uaResult" class="w-full h-32 bg-[#020617] border border-white/10 rounded-lg p-4 mt-5 text-green-400 font-mono text-xs focus:border-yellow-500 outline-none shadow-inner" readonly placeholder="User Agents will appear here..."></textarea>`;
        controls.innerHTML = `<button onclick="runUAGenerator()" class="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-black text-sm shadow-lg shadow-yellow-500/20 transition flex items-center gap-2"><i class="ph-bold ph-gear"></i> Generate UAs</button>`;
        setTimeout(() => { updateUABrands(); updateUAApps(); }, 100);
    }
    else if(toolId === 'email') {
        title.innerHTML = `<i class="ph-fill ph-envelope-open text-yellow-400"></i> Email Generator`;
        output.innerHTML = `<div class="generator-grid"><div class="full-width"><label class="gen-label">Pattern</label><select id="emailPattern" class="gen-input"><option value="0">Name + Name</option><option value="1">Name.Name</option><option value="2">Name + Year</option><option value="3">Name + Random</option></select></div><div class="full-width"><label class="gen-label">Quantity</label><input type="number" id="emailQty" class="gen-input" value="50" min="1" max="5000"></div></div><textarea id="emailResult" class="w-full h-48 bg-[#020617] border border-white/10 rounded-lg p-4 mt-5 text-green-400 font-mono text-xs focus:border-yellow-500 outline-none shadow-inner" readonly></textarea>`;
        controls.innerHTML = `<button onclick="runEmailGenerator()" class="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-black text-sm shadow-lg shadow-yellow-500/20 transition flex items-center gap-2"><i class="ph-bold ph-gear"></i> Generate Emails</button>`;
    }
    else if(toolId === 'validator') {
        title.innerHTML = `<i class="ph-fill ph-shield-check text-green-400"></i> Email Checker`;
        output.innerHTML = `<textarea id="validInput" class="w-full h-32 bg-[#020617] border border-white/10 rounded-lg p-4 text-white font-mono text-xs focus:border-green-500 outline-none shadow-inner" placeholder="Paste emails here (one per line)..."></textarea><div class="mt-5 h-48 overflow-y-auto bg-[#020617] border border-white/10 rounded-lg"><table class="w-full text-left border-collapse"><thead class="bg-white/5 sticky top-0"><tr><th class="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-white/10">Email</th><th class="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-white/10">Status</th><th class="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-white/10">Result</th></tr></thead><tbody id="validResult"></tbody></table></div>`;
        controls.innerHTML = `<button onclick="runEmailValidator()" class="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-black text-sm shadow-lg shadow-green-500/20 transition flex items-center gap-2"><i class="ph-bold ph-magnifying-glass"></i> Check Emails</button>`;
    }
}

// --- Generator Backend Logic ---
function updateUABrands(){ const os=document.getElementById('uaOS').value; const c=document.getElementById('uaCountry').value; const b=document.getElementById('uaBrand'); b.innerHTML=''; if(os==='Android'){ let list=uaData.countryBrands[c]||uaData.countryBrands['US']; list.forEach(x=>b.add(new Option(x,x))); b.add(new Option('Random','Random')); } else if(os==='iOS'){ b.add(new Option('Apple','Apple')); } else { b.add(new Option('PC/Mac','PC')); } }
function updateUAApps(){ const env=document.getElementById('uaEnv').value; const app=document.getElementById('uaApp'); app.innerHTML=''; let list=env==='browser'?uaData.versions.browser:uaData.versions.social; Object.keys(list).forEach(k=>app.add(new Option(k,k))); app.add(new Option('Random','Random')); updateUAVersion(); }
function updateUAVersion(){ const env=document.getElementById('uaEnv').value; const app=document.getElementById('uaApp').value; const ver=document.getElementById('uaVersion'); ver.value=(app==='Random')?'Mixed':(env==='browser'?uaData.versions.browser[app]:uaData.versions.social[app]); }
function runUAGenerator(){ const qty=parseInt(document.getElementById('uaQty').value); const sCountry=document.getElementById('uaCountry').value; const sOS=document.getElementById('uaOS').value; const sBrand=document.getElementById('uaBrand').value; const sEnv=document.getElementById('uaEnv').value; const sApp=document.getElementById('uaApp').value; const loc=uaData.locales[sCountry].code; let output=new Set(); let safe=0; while(output.size<qty && safe<qty*20){ safe++; let os=sOS==='Random'?rnd(['Android','iOS','Windows','macOS']):sOS; let brand=sBrand; if(os==='Android'){ if(sOS==='Random') brand=rnd(uaData.countryBrands['US'].filter(x=>x!=='Apple')); else if(brand==='Random') brand=rnd(uaData.countryBrands[sCountry].filter(x=>x!=='Apple')); } let model=(os==='Android')?rnd(uaData.deviceDB[brand]||uaData.deviceDB['Samsung']):rnd(uaData.deviceDB['Apple']); let appKeys=sEnv==='browser'?Object.keys(uaData.versions.browser):Object.keys(uaData.versions.social); let app=sApp==='Random'?rnd(appKeys):sApp; let ver=sEnv==='browser'?uaData.versions.browser[app]:uaData.versions.social[app]; let androidVer=rnd(['12','13','14']); let build=getBuild(); let cv=getChromeVer(); let iosVer=rnd(['18_3_2','18_2_1','17_5_1']); let ua=""; if(os==='Android'){ let baseWv=`Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build}; wv)`; let baseBrowser=`Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build})`; if(sEnv==='browser'){ if(app==='Chrome') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Mobile Safari/537.36`; else if(app==='Firefox') ua=`Mozilla/5.0 (Android ${androidVer}; Mobile; ${model} Build/${build}; rv:146.0) Gecko/146.0 Firefox/${ver}`; else if(app==='Edge') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 EdgA/${ver}`; else if(app==='Opera') ua=`${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 OPR/${ver}`; } else { let webviewCore=`${baseWv} AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/${cv} Mobile Safari/537.36`; if(app==='Facebook') ua=`${webviewCore} [FB_IAB/FB4A;FBAV/${ver};FBLC/${loc};FBMF/${brand};FBDV/${model};FBSV/${androidVer};]`; else ua=`${webviewCore} ${app}/${ver}`; } } else if(os==='iOS'){ if(sEnv==='browser'){ if(app==='Safari') ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ver} Mobile/15E148 Safari/604.1`; else ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${ver} Mobile/15E148 Safari/604.1`; } else { ua=`Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ${app}/${ver}`; } } else { let sys=os==='Windows'?`Windows NT ${rnd(['10.0','11.0'])}`:`Macintosh; Intel Mac OS X ${rnd(['14_5','15_1'])}`; ua=`Mozilla/5.0 (${sys}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Safari/537.36`; } if(ua) output.add(ua); } document.getElementById('uaResult').value=Array.from(output).join('\n'); }
function runEmailGenerator(){ const qty=parseInt(document.getElementById('emailQty').value); const pattern=parseInt(document.getElementById('emailPattern').value); let results=[]; let uniqueEmails=new Set(); let attempts=0; let maxAttempts=qty*10; while(results.length<qty && attempts<maxAttempts){ attempts++; const isMale=Math.random()<0.5; const genderLabel=isMale?"male":"female"; const firstName=isMale?getRandomItem(uaData.email.maleNames):getRandomItem(uaData.email.femaleNames); const lastName=getRandomItem(uaData.email.titles); let username=""; const cleanFirst=firstName.toLowerCase(); const cleanLast=lastName.toLowerCase(); const randomYear=getRandomItem(years); const randomNumber=getRandomItem(commonNumbers); if(pattern===0) username=cleanFirst+cleanLast; else if(pattern===1) username=cleanFirst+"."+cleanLast; else if(pattern===2) username=cleanFirst+cleanLast+randomYear; else username=cleanFirst+cleanLast+randomNumber; const domain=getRandomItem(uaData.email.domains); const fullEmail=`${username}@${domain}`; if(!uniqueEmails.has(fullEmail)){ uniqueEmails.add(fullEmail); results.push(`${genderLabel} : ${firstName} ${lastName} : ${fullEmail}`); } } document.getElementById('emailResult').value=results.join('\n'); }
async function runEmailValidator(){ const raw=document.getElementById('validInput').value; const emails=raw.split('\n').filter(e=>e.trim()); const tbody=document.getElementById('validResult'); tbody.innerHTML=''; for(let email of emails){ let domain=email.split('@')[1]; let isValid=false; try{ let res=await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`,{headers:{'Accept':'application/dns-json'}}); let data=await res.json(); if(data.Answer && data.Answer.length>0) isValid=true; }catch(e){} const statusHTML=isValid?'<span class="text-green-400 bg-green-400/10 px-2 py-1 rounded text-[10px] font-bold">FOUND</span>':'<span class="text-red-400 bg-red-400/10 px-2 py-1 rounded text-[10px] font-bold">INVALID</span>'; const resultText=isValid?'Valid Domain':'Unreachable'; tbody.innerHTML+=`<tr class="border-b border-white/5"><td class="p-3 text-sm text-gray-300 font-mono">${email}</td><td class="p-3">${statusHTML}</td><td class="p-3 text-xs text-gray-400">${resultText}</td></tr>`; } }
