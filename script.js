const CONFIG = {
    backendURL: "https://script.google.com/macros/s/AKfycbwv49zfBOFTbmoamPIUqNcnjkB4s1RdGWXuBzQLTIJd3_b7ls3ociGJ3MbkxRACa8S7DQ/exec"
};

const NOTICES = {
    PUBLIC: "🚀 Welcome to Freelancer Nazmul IT 🔥 Get 30% OFF on Yearly Plan! ⚡ Instant Activation with Bkash/Nagad/Rocket & Crypto-Pay/Binance. Please Login or Register first to access packages.",
    FREE_USER: "⚠️ Account Created! Please purchase a VIP package from the dashboard. Send the exact amount and submit the transaction ID to get your VIP code.",
    VIP_USER: "🌟 Premium Access Active! Welcome to the VIP Dashboard. You now have full access to all courses, tools, and software."
};

const COURSE_VIDEOS = [
    { title: "PART 01 :- What is CPA Self SignUp? Rules For Opening CPA Site Account.", url: "https://player.mediadelivery.net/play/631069/66270f20-3f83-4ac2-be65-a0a0ea07b250" },
    { title: "Class 2: CPA_Self_SignUp_সিপিএ_ক্যাটাগরি_ও_সেরা_অফার_সিলেকশন", url: "https://player.mediadelivery.net/embed/631069/f43ea652-0c8c-432a-aeb9-25c37e93e1d0?autoplay=false" },
    { title: "Class 3: CPA_Self_SignUp_সেরা_ল্যান্ডিং_পেজ_ডিজাইন_ও_তৈরি", url: "https://player.mediadelivery.net/embed/631069/1c7035a8-4251-43f3-a79d-623c42116e99?autoplay=false" },
    { title: "Class 4: Self_Sign_Up_হাই_সিকিউরিটি_সেরা_সফটওয়্যার_Mobile_&_PC", url: "https://player.mediadelivery.net/embed/631069/0e459ad8-98b5-4428-9392-20de391438c0?autoplay=false" },
    { title: "Class 5: Self_Sign_Up_Proxy_IP_সাইট_ও_পার্সেস_সিস্টেম", url: "https://player.mediadelivery.net/embed/631069/32a398f1-7158-4cd4-aceb-3e0ce4b9117b?autoplay=false" },
    { title: "Class 6: আনলিমিটেড_UserAgentGmailAddress_মেথড", url: "https://player.mediadelivery.net/embed/631069/703f443f-958a-4288-8680-16b6ea6a0359?autoplay=false" },
    { title: "Class 7: Self_Sign_Up_ComputerMobile_ডিভাইস_সেটআপ", url: "https://player.mediadelivery.net/embed/631069/7cd6e057-d7d8-4009-bb5b-02270ff59b27?autoplay=false" },
    { title: "Class 8: Dating_Offers_সাইন_আপ_Social_Media_মেথড", url: "https://player.mediadelivery.net/embed/631069/5a91bf48-79c7-4b96-8945-07aadf06bc43?autoplay=false" },
    { title: "Class 9: Fresh Offers সাইন আপ মেথড", url: "https://player.mediadelivery.net/embed/631069/414fc4eb-78c3-40a4-b8af-f67d440aa11b?autoplay=false" },
    { title: "Class 10: Withdrawals & Next Steps", url: "https://player.mediadelivery.net/embed/631069/0bc51550-af74-4bc2-824a-8c0ee4af4446?autoplay=false" }
];

let isLoggedIn = false;
let countdownInterval;

window.onload = function() {
    checkLoginStatus();
};

function setNotice(type) {
    const noticeEl = document.getElementById('dynamicNotice');
    const noticeContainer = document.getElementById('noticeBarContainer');
    if(!noticeEl || !noticeContainer) return;
    
    const redNoticeClass = "fixed top-[56px] md:top-[64px] left-0 w-full h-[35px] md:h-[40px] bg-[#cc0000] border-b border-white/10 text-white text-[11px] md:text-sm font-bold flex items-center z-[40] shadow-md transition-colors duration-500";
    
    if(type === 'PUBLIC') {
        noticeEl.innerText = NOTICES.PUBLIC;
        noticeContainer.className = redNoticeClass;
    } else if(type === 'FREE_USER') {
        noticeEl.innerText = NOTICES.FREE_USER;
        noticeContainer.className = redNoticeClass;
    } else {
        noticeEl.innerText = NOTICES.VIP_USER;
        noticeContainer.className = redNoticeClass;
    }
}

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
    } else {
        setNotice('PUBLIC');
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
    const timerBox = document.getElementById('countdownTimer');
    
    if (isPremium) {
        setNotice('VIP_USER');
        dashPlan.innerText = `${plan} ✅`;
        dashPlan.className = "text-green-400 font-bold";
        vipCodeBox.classList.add('hidden');
        timerBox.classList.remove('hidden');
        
        renderCourseVideos(true);
        startCountdown(user.expiry);
        
        const unlockClass = "ph-fill ph-check-circle absolute top-4 right-4 text-green-400 text-xl transition z-10";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software_mix', 'address', 'name', 'dl_clicker', 'dl_browser'].forEach(id => {
            const icon = document.getElementById(`lock_${id}`);
            if(icon) icon.className = unlockClass;
        });

    } else {
        setNotice('FREE_USER');
        dashPlan.innerText = "Locked (Free User) 🔒";
        dashPlan.className = "text-red-400 font-bold";
        
        vipCodeBox.classList.remove('hidden');
        timerBox.classList.add('hidden');
        
        renderCourseVideos(false);
        clearInterval(countdownInterval);
        
        const lockClass = "ph-fill ph-lock-key absolute top-4 right-4 text-zinc-600 group-hover:text-red-500 transition text-xl z-10";
        ['ua', 'email', 'validator', 'cpa', 'proxy', 'software_mix', 'address', 'name', 'dl_clicker', 'dl_browser'].forEach(id => {
            const icon = document.getElementById(`lock_${id}`);
            if(icon) icon.className = lockClass;
        });
    }
    
    let savedTab = localStorage.getItem('lastDashTab') || 'courses';
    switchDashTab(savedTab);
}

function renderCourseVideos(isPremium) {
    const grid = document.getElementById('courseVideoGrid');
    
    if(isPremium) {
        grid.innerHTML = COURSE_VIDEOS.map((video, index) => {
            const safeUrl = video.url.replace('autoplay=true', 'autoplay=false');
            return `
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg p-2 transition hover:border-violet-500/50">
                <div class="video-container">
                    <iframe src="${safeUrl}" allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;" allowfullscreen></iframe>
                </div>
                <p class="p-4 text-white font-bold text-sm bg-black/40 border-t border-zinc-800">${video.title}</p>
            </div>
        `}).join('');
    } else {
        grid.innerHTML = `
            <div class="dashboard-premium-item neon-panel glow-yellow p-6 flex flex-col items-center justify-center text-center gap-3 cursor-pointer bg-zinc-900 border border-zinc-800/80 group h-64 relative w-full lg:col-span-2" onclick="openPaymentModal()">
                <i class="ph-fill ph-lock-key absolute top-4 right-4 text-zinc-600 group-hover:text-red-500 transition text-2xl z-10"></i>
                <i class="ph-fill ph-video-camera text-6xl text-yellow-400 mt-2"></i>
                <h4 class="text-xl font-bold text-white mt-2">10+ Premium Classes Locked</h4>
                <p class="text-xs text-zinc-500 font-bold mt-2 bg-black/50 px-4 py-2 rounded border border-white/5">Click to purchase a package and unlock all video modules.</p>
            </div>
        `;
    }
}

function startCountdown(expiryTimestamp) {
    clearInterval(countdownInterval);
    const timerDiv = document.getElementById('countdownTimer');
    
    if (!expiryTimestamp) {
        timerDiv.innerHTML = `<div class="text-green-400 font-bold text-sm bg-green-400/10 px-4 py-2 rounded-lg border border-green-500/20 shadow-inner">LIFETIME VIP ACCESS</div>`;
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

function switchDashTab(tName) {
    localStorage.setItem('lastDashTab', tName);
    
    document.querySelectorAll('.dash-tab-content').forEach(e => e.classList.add('hidden'));
    document.querySelectorAll('[id^="tabBtn-"]').forEach(b => { 
        b.classList.remove('bg-violet-600/20', 'border-violet-500', 'text-white', 'shadow-[0_5px_15px_rgba(139,92,246,0.2)]'); 
        b.classList.add('bg-zinc-900', 'text-zinc-400', 'border-zinc-800'); 
    });
    
    const contentBox = document.getElementById('tabContent-' + tName);
    if(contentBox) contentBox.classList.remove('hidden');
    
    const active = document.getElementById('tabBtn-' + tName);
    if(active) {
        active.classList.remove('bg-zinc-900', 'text-zinc-400', 'border-zinc-800'); 
        active.classList.add('bg-violet-600/20', 'border-violet-500', 'text-white', 'shadow-[0_5px_15px_rgba(139,92,246,0.2)]'); 
    }
}

function handleHomeClick(planValue = 'Basic Learning|2000 BDT / $20') {
    const user = JSON.parse(localStorage.getItem('proToolsUser')); 
    if (!user || !user.isLoggedIn) { 
        openAuthModal(); 
    } else { 
        openPaymentModal(planValue);
    }
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
        tabRegister.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition relative"; 
    } else if (tab === 'register') { 
        registerForm.classList.remove('hidden'); 
        tabRegister.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-violet-500 bg-white/5 transition relative"; 
        tabLogin.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition"; 
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

function checkAccess(urlOrAction) { 
    const user = JSON.parse(localStorage.getItem('proToolsUser')); 
    if (!user || !user.isLoggedIn) { 
        openAuthModal(); 
        return; 
    } 
    
    if (!user.plan || user.plan === 'Free') { 
        openPaymentModal();
    } else { 
        if (urlOrAction === 'dl_clicker') {
            window.open("https://drive.google.com/file/d/1k_xwpyFXs7_BeTy6wl9jJTXv14mI0ycR/view?usp=sharing", '_blank');
        } else if (urlOrAction === 'dl_browser_pc') {
            window.open("https://drive.google.com/file/d/1nHkC4jWpuSAI5_Do1kO3OHT6wV3Pg0_n/view?usp=sharing", '_blank');
        } else if (urlOrAction === 'dl_browser_mobile') {
            window.open("https://drive.google.com/file/d/1fToucChv4ASQuXtnGdeVON7XMjYsnFub/view?usp=sharing", '_blank');
        } else {
            window.location.href = urlOrAction;
        }
    } 
}

function openPaymentModal(planValue = 'Basic Learning|2000 BDT / $20') {
    document.getElementById('paymentModal').classList.remove('hidden');
    document.getElementById('payFormArea').classList.remove('hidden');
    document.getElementById('paySuccessArea').classList.add('hidden');
    
    const select = document.getElementById('modalPackageSelect');
    if(select) {
        select.value = planValue;
        updateModalPrice();
    }
    selectPayment('bkash');
}

function updateModalPrice() {
    const val = document.getElementById('modalPackageSelect').value;
    const price = val.split('|')[1];
    document.getElementById('modalPayAmount').innerText = price;
}

function selectPayment(method) {
    document.querySelectorAll('.pay-details').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.pay-radio-box').forEach(el => el.classList.remove('active'));
    
    document.getElementById(`detail_${method}`).style.display = 'block';
    document.getElementById(`detail_${method}`).parentElement.classList.add('active');
}

function submitPaymentForm() {
    document.getElementById('payFormArea').classList.add('hidden');
    document.getElementById('paySuccessArea').classList.remove('hidden');
}

function applyVipFromDash() {
    executeRedeem('dashVipInput');
}

function applyVipFromModal() {
    executeRedeem('modalVipInput');
}

function executeRedeem(inputId) {
    const codeInput = document.getElementById(inputId);
    const code = codeInput.value.trim();
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; }
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
            if(codeInput) codeInput.value = '';
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
