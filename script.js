const CONFIG = {
    
    backendURL: "https://script.google.com/macros/s/AKfycbwv49zfBOFTbmoamPIUqNcnjkB4s1RdGWXuBzQLTIJd3_b7ls3ociGJ3MbkxRACa8S7DQ/exec"
};

let isLoggedIn = false;
let countdownInterval;

window.onload = function() {
    checkLoginStatus();
};

function setNotice(msg) {
    const noticeEl = document.getElementById('dynamicNotice');
    if(noticeEl) noticeEl.innerText = msg;
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (user && user.isLoggedIn) {
        isLoggedIn = true;
        document.getElementById('home-section').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        
        const navBtn = document.getElementById('navAuthBtn');
        navBtn.innerHTML = `<i class="ph-bold ph-sign-out mr-1.5"></i> Logout`;
        navBtn.classList.replace('bg-black', 'bg-red-500');
        navBtn.onclick = logout;

        document.getElementById('dashUserName').innerText = user.name || "Student";
        syncUserPlan(user);
    } else {
        setNotice("🚀 Welcome to Freelancer Nazmul IT 🔥 Get 30% OFF on Yearly Plan! ⚡ Instant Activation with Bkash/Nagad/Rocket & Crypto-Pay/Binance. Please Login or Register first to access packages.");
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
        setNotice("Premium Access Active! Welcome to the VIP Dashboard. You now have full access to all courses, tools, and software.");
        dashPlan.innerText = `${plan} ✅`;
        dashPlan.className = "text-green-400 font-bold";
        vipCodeBox.classList.add('hidden');
        timerBox.classList.remove('hidden');
        
        startCountdown(user.expiry);
        
        // UNLOCK All Grid Icons
        const unlockClass = "ph-fill ph-check-circle absolute top-5 right-5 text-green-400 text-2xl transition z-10";
        ['course', 'ua', 'email', 'software', 'validator', 'cpa', 'proxy', 'software_mix', 'address', 'name'].forEach(id => {
            const icon = document.getElementById(`lock_${id}`);
            if(icon) icon.className = unlockClass;
        });

    } else {
        setNotice("Your account is restricted. Please enter your VIP code or purchase a package to unlock full workspace access.");
        dashPlan.innerText = "Access Locked 🔒";
        dashPlan.className = "text-red-400 font-bold";
        
        vipCodeBox.classList.remove('hidden');
        timerBox.classList.add('hidden');
        
        clearInterval(countdownInterval);
        
        // LOCK All Grid Icons
        const lockClass = "ph-fill ph-lock-key absolute top-5 right-5 text-zinc-600 group-hover:text-red-500 transition text-2xl z-10";
        ['course', 'ua', 'email', 'software', 'validator', 'cpa', 'proxy', 'software_mix', 'address', 'name'].forEach(id => {
            const icon = document.getElementById(`lock_${id}`);
            if(icon) icon.className = lockClass;
        });
    }
}

function startCountdown(expiryTimestamp) {
    clearInterval(countdownInterval);
    const timerDiv = document.getElementById('countdownTimer');
    
    if (!expiryTimestamp) {
        timerDiv.innerHTML = `<div class="text-green-400 font-bold text-sm bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">LIFETIME ACCESS</div>`;
        return;
    }

    function update() {
        const now = new Date().getTime();
        const distance = expiryTimestamp - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            timerDiv.innerHTML = '<div class="text-red-500 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">ACCESS EXPIRED</div>';
            const user = JSON.parse(localStorage.getItem('proToolsUser'));
            if(user.plan !== 'Free') syncUserPlan(user);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        timerDiv.innerHTML = `
            <div class="flex gap-2 justify-center">
                <div class="bg-[#020617] border border-white/10 rounded-lg p-2 min-w-[50px]"><span class="text-lg text-white font-mono font-bold block leading-none">${days}</span><span class="text-[9px] text-zinc-500">DAYS</span></div>
                <div class="bg-[#020617] border border-white/10 rounded-lg p-2 min-w-[50px]"><span class="text-lg text-white font-mono font-bold block leading-none">${hours}</span><span class="text-[9px] text-zinc-500">HRS</span></div>
                <div class="bg-[#020617] border border-white/10 rounded-lg p-2 min-w-[50px]"><span class="text-lg text-white font-mono font-bold block leading-none">${minutes}</span><span class="text-[9px] text-zinc-500">MIN</span></div>
            </div>
        `;
    }
    
    update();
    countdownInterval = setInterval(update, 60000); 
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
        tabLogin.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition";
        tabRegister.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white transition relative";
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
    
    btn.innerHTML = `Processing...`; 
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
        window.location.href = urlOrAction;
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
    btn.innerHTML = `Verifying...`;
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
            location.reload();
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
