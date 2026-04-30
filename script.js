// ============================================
// 🏆 FREELANCER NAZMUL - MASTER SCRIPT (V19) 🏆
// ============================================

const CONFIG = {
    backendURL: "https://script.google.com/macros/s/AKfycbwv49zfBOFTbmoamPIUqNcnjkB4s1RdGWXuBzQLTIJd3_b7ls3ociGJ3MbkxRACa8S7DQ/exec"
};

// 🔥 LINK DATA DATABASE
const LINK_DATA = {
    cpa: [
        { name: "CpaZon (Fresh & Dating Offer/Min $50)", url: "https://cpazon.com" },
        { name: "Exnessoffer (Fresh & Dating Offer/Min $50)", url: "https://aff.exnessoffer.com/register?refer_id=1793" },
        { name: "Cpagrip (Fresh Offer/Min $50)", url: "https://www.cpagrip.com/signup.php?ref=479249" },
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

// 🔥 VIDEO DATABASE
const COURSE_VIDEOS = [
    { 
        title: "Class 1: CPA Self SignUp Mastery", 
        url: "https://player.mediadelivery.net/embed/631069/0bc51550-af74-4bc2-824a-8c0ee4af4446?autoplay=false" 
    }
];

let isLoggedIn = false;
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
            logout();
        }
    })
    .catch(err => {
        updateUIBasedOnPlan(user);
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
        
        // Setup Videos
        renderCourseVideos(true);
        
        // Start Live Timer
        startCountdown(user.expiry);
        
        // Unlock all tools visually
        const iconClass = "ph-fill ph-check-circle text-green-400 text-xl";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software', 'address', 'name', 'dl_clicker', 'dl_browser'].forEach(id => {
            const lockIcon = document.getElementById(`lock_${id}`);
            if(lockIcon) lockIcon.className = iconClass;
        });

    } else {
        dashPlan.innerText = "Locked (Free User) 🔒";
        dashPlan.className = "text-red-400 font-bold";
        vipCodeBox.classList.remove('hidden');
        
        // Setup Locked Videos
        renderCourseVideos(false);
        
        // Stop Timer
        clearInterval(countdownInterval);
        document.getElementById('countdownTimer').innerHTML = `<div class="text-zinc-500 font-bold text-sm">Please activate a plan</div>`;
        
        // Lock all tools visually
        const iconClass = "ph-fill ph-lock-key text-zinc-600 text-xl";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software', 'address', 'name', 'dl_clicker', 'dl_browser'].forEach(id => {
            const lockIcon = document.getElementById(`lock_${id}`);
            if(lockIcon) lockIcon.className = iconClass;
        });
    }
}

function renderCourseVideos(isPremium) {
    const grid = document.getElementById('courseVideoGrid');
    
    if(isPremium) {
        grid.innerHTML = COURSE_VIDEOS.map(video => `
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg p-2">
                <div class="video-container">
                    <iframe src="${video.url}" allowfullscreen></iframe>
                </div>
                <p class="p-4 text-white font-bold text-sm bg-black/40 border-t border-zinc-800">${video.title}</p>
            </div>
        `).join('');
    } else {
        grid.innerHTML = `
            <div class="dashboard-premium-item neon-panel glow-yellow p-6 flex flex-col items-center justify-center text-center gap-3 cursor-pointer bg-zinc-900 border border-zinc-800/80 group h-64" onclick="openPaymentModal()">
                <div class="flex justify-between w-full absolute top-3 left-3 right-3 px-1"><span class="w-2 h-2"></span><i class="ph-fill ph-lock-key text-zinc-600 group-hover:text-red-500 transition text-xl"></i></div>
                <i class="ph-fill ph-video-camera text-6xl text-yellow-400 mt-2"></i>
                <h4 class="text-lg font-bold text-white mt-1">New Video Course</h4>
                <p class="text-xs text-zinc-500 font-bold">Locked. Click to buy package.</p>
            </div>
        `;
    }
}

// ============================================
// LIVE COUNTDOWN TIMER
// ============================================

function startCountdown(expiryTimestamp) {
    clearInterval(countdownInterval);
    const timerDiv = document.getElementById('countdownTimer');
    
    if (!expiryTimestamp) {
        timerDiv.innerHTML = `<div class="text-red-500 font-bold text-sm">Lifetime Access</div>`;
        return;
    }

    function update() {
        const now = new Date().getTime();
        const distance = expiryTimestamp - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            timerDiv.innerHTML = '<div class="text-red-500 font-bold text-xl tracking-widest bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">EXPIRED</div>';
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
    countdownInterval = setInterval(update, 60000); 
}

// ============================================
// VIP CODE REDEEM LOGIC
// ============================================

function redeemVipCode() {
    executeRedeem('vipCodeInput');
}

function applyVipFromModal() {
    executeRedeem('modalVipInput');
}

function executeRedeem(inputId) {
    const codeInput = document.getElementById(inputId);
    const code = codeInput.value.trim();
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    
    if (!code) { alert("⚠️ Please enter a VIP code!"); return; }
    
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerHTML = `Wait..`;
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
            document.getElementById('paymentModal').classList.add('hidden');
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

function switchDashTab(tName) {
    document.querySelectorAll('.dash-tab-content').forEach(e => e.classList.add('hidden'));
    document.querySelectorAll('[id^="tabBtn-"]').forEach(b => { 
        b.classList.remove('bg-violet-600/20', 'border-violet-500', 'text-white', 'shadow-[0_5px_15px_rgba(139,92,246,0.2)]'); 
        b.classList.add('bg-zinc-900', 'text-zinc-400', 'border-zinc-800'); 
    });
    
    document.getElementById('tabContent-' + tName).classList.remove('hidden');
    
    const active = document.getElementById('tabBtn-' + tName);
    active.classList.remove('bg-zinc-900', 'text-zinc-400', 'border-zinc-800'); 
    active.classList.add('bg-violet-600/20', 'border-violet-500', 'text-white', 'shadow-[0_5px_15px_rgba(139,92,246,0.2)]'); 
}

function openAuthModal() { 
    if(isLoggedIn) {
        document.getElementById('home-section').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        window.scrollTo(0,0);
        return;
    }
    document.getElementById('authModal').classList.remove('hidden'); 
    switchTab('login'); 
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
// PAYMENT & LOCK LOGIC
// ============================================

function checkAccess(toolPathOrId) { 
    const user = JSON.parse(localStorage.getItem('proToolsUser')); 
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; } 
    
    if (!user.plan || user.plan === 'Free') { 
        openPaymentModal();
    } else { 
        // User has access. 
        if(toolPathOrId.includes('.html')) {
            // It's a file redirect
            window.location.href = toolPathOrId;
        } else if (toolPathOrId.startsWith('dl_')) {
            // It's a software download link
            if(toolPathOrId === 'dl_clicker') window.open(LINK_DATA.software[0].url, '_blank');
            if(toolPathOrId === 'dl_browser_pc') window.open(LINK_DATA.software[0].url, '_blank');
            if(toolPathOrId === 'dl_browser_mobile') window.open(LINK_DATA.software[1].url, '_blank');
        } else {
            // Load console links (CPA, Proxy etc)
            loadTool(toolPathOrId);
        }
    } 
}

function openPaymentModal() {
    document.getElementById('paymentModal').classList.remove('hidden');
    document.getElementById('payFormArea').classList.remove('hidden');
    document.getElementById('paySuccessArea').classList.add('hidden');
    // Default select bkash
    selectPayment('bkash');
}

function selectPayment(method) {
    // Hide all details
    document.querySelectorAll('.pay-details').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.pay-radio-box').forEach(el => el.classList.remove('active'));
    
    // Show selected
    document.getElementById(`detail_${method}`).style.display = 'block';
    document.getElementById(`detail_${method}`).parentElement.classList.add('active');
}

function submitPaymentForm() {
    document.getElementById('payFormArea').classList.add('hidden');
    document.getElementById('paySuccessArea').classList.remove('hidden');
}

function loadTool(toolId) {
    const consoleDiv = document.getElementById('toolConsole');
    const title = document.getElementById('activeToolName');
    const output = document.getElementById('consoleOutput');
    consoleDiv.classList.remove('hidden');
    window.scrollTo({ top: consoleDiv.offsetTop - 100, behavior: 'smooth' });
    output.innerHTML = "";

    // 🔗 LINK TOOLS
    if (['cpa', 'proxy', 'address', 'name'].includes(toolId)) {
        let toolName = "Links";
        if(toolId === 'cpa') toolName = "Best CPA Networks";
        if(toolId === 'proxy') toolName = "Best Proxy IP Lists";
        if(toolId === 'address') toolName = "Real Address & Number Sites";
        if(toolId === 'name') toolName = "Full Male & Female Name Sites";

        let icon = 'ph-globe';
        if(toolId === 'proxy') icon = 'ph-network';
        if(toolId === 'address') icon = 'ph-map-pin';
        if(toolId === 'name') icon = 'ph-identification-card';
        
        title.innerHTML = `<i class="ph-fill ${icon} text-violet-400"></i> ${toolName}`;
        
        let linksHTML = LINK_DATA[toolId] ? LINK_DATA[toolId].map(link => `
            <div class="flex justify-between items-center bg-[#020617] p-4 rounded-lg border border-white/5 mb-3 hover:border-violet-500/50 transition group">
                <span class="text-sm font-bold text-gray-300 group-hover:text-white transition">${link.name}</span>
                <a href="${link.url}" target="_blank" class="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-xs font-black shadow-lg transition flex items-center gap-1.5 whitespace-nowrap">Open <i class="ph-bold ph-arrow-square-out"></i></a>
            </div>
        `).join('') : "<p class='text-gray-400'>No links available.</p>";
        
        output.innerHTML = `<div class="mt-2 w-full">${linksHTML}</div>`;
    }
}
