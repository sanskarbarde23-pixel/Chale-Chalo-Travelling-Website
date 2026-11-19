/* ============================================================
   ChaloChale Travel App — script.js
   Global UI + data-driven page modules
   ============================================================ */
'use strict';

/* ------------------------------------------------------------
   SHARED DATA
------------------------------------------------------------ */
const DESTINATIONS = [
    { id: 'goa',        name: 'Goa',            country: 'India',       cat: 'beach',     img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60', price: 8999,  rating: 4.6, days: '5 Days',   desc: 'Sun-soaked beaches, shacks and vibrant nightlife.' },
    { id: 'manali',     name: 'Manali',         country: 'India',       cat: 'mountain',  img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60', price: 11499, rating: 4.8, days: '6 Days',   desc: 'Snow peaks, valleys and cosy mountain stays.' },
    { id: 'jaipur',     name: 'Jaipur',         country: 'India',       cat: 'city',      img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60', price: 9999,  rating: 4.5, days: '4 Days',   desc: 'The Pink City — forts, palaces and bazaars.' },
    { id: 'kerala',     name: 'Kerala',         country: 'India',       cat: 'beach',     img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c164b?auto=format&fit=crop&w=800&q=60', price: 13499, rating: 4.9, days: '7 Days',   desc: 'Backwaters, houseboats and ayurvedic retreats.' },
    { id: 'ladakh',     name: 'Ladakh',         country: 'India',       cat: 'mountain',  img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60', price: 18999, rating: 4.7, days: '9 Days',   desc: 'High-altitude deserts, lakes and monasteries.' },
    { id: 'tajmahal',   name: 'Agra & Taj Mahal', country: 'India',     cat: 'city',      img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=60', price: 7499,  rating: 4.4, days: '3 Days',   desc: 'The eternal city of love and Mughal heritage.' },
    { id: 'dubai',      name: 'Dubai',          country: 'UAE',         cat: 'city',      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60', price: 45999, rating: 4.8, days: '6 Days',   desc: 'Skylines, deserts, malls and luxury experiences.' },
    { id: 'bali',       name: 'Bali',           country: 'Indonesia',   cat: 'beach',     img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60', price: 52999, rating: 4.9, days: '7 Days',   desc: 'Jungle villas, surf beaches and spiritual retreats.' },
    { id: 'paris',      name: 'Paris',          country: 'France',      cat: 'city',      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60', price: 89999, rating: 4.7, days: '8 Days',   desc: 'Eiffel views, cafés, art and timeless romance.' },
    { id: 'switzerland',name: 'Switzerland',    country: 'Europe',      cat: 'mountain',  img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=60', price: 129999, rating: 4.9, days: '10 Days', desc: 'Alpine lakes, trains and picture-perfect peaks.' },
    { id: 'santorini',  name: 'Santorini',      country: 'Greece',      cat: 'beach',     img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60', price: 139999, rating: 4.8, days: '8 Days',   desc: 'Whitewashed cliffs, caldera sunsets and Aegean blue.' },
    { id: 'maldives',   name: 'Maldives',       country: 'Maldives',    cat: 'beach',     img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60', price: 149999, rating: 5.0, days: '6 Days',   desc: 'Overwater villas and crystal-clear lagoons.' },
];

const PACKAGES = [
    { id: 'goa-budget',    dest: 'goa',      name: 'Goa Beach Blast',        type: 'budget',   days: '5N / 6D', price: 8999,  img: DESTINATIONS[0].img,  rating: 4.6, tag: 'Best Seller', features: ['Beachside stay', 'Airport transfers', '2 excursions', 'Breakfast included'] },
    { id: 'manali-adventure', dest: 'manali', name: 'Manali Snow Adventure', type: 'adventure', days: '6N / 7D', price: 13999, img: DESTINATIONS[1].img,  rating: 4.8, tag: 'Adventure',   features: ['Hill-view hotel', 'Rohtang permit', 'Trekking guide', 'Bonfire & BBQ'] },
    { id: 'jaipur-royal', dest: 'jaipur',    name: 'Royal Rajasthan',       type: 'luxury',   days: '5N / 6D', price: 18999, img: DESTINATIONS[2].img,  rating: 4.7, tag: 'Luxury',      features: ['Heritage haveli', 'Guided city tour', 'Camel safari', 'Royal dinner'] },
    { id: 'kerala-backwater', dest: 'kerala', name: 'Kerala Backwater Cruise', type: 'family', days: '7N / 8D', price: 24999, img: DESTINATIONS[3].img,  rating: 4.9, tag: 'Family',      features: ['Houseboat stay', 'Ayurveda session', 'Kathakali show', 'All meals'] },
    { id: 'dubai-grand',  dest: 'dubai',     name: 'Dubai Grand Tour',      type: 'luxury',   days: '6N / 7D', price: 64999, img: DESTINATIONS[6].img,  rating: 4.8, tag: 'International', features: ['5-star hotel', 'Desert safari', 'Burj Khalifa tickets', 'City transfers'] },
    { id: 'bali-tropical', dest: 'bali',     name: 'Bali Tropical Escape',  type: 'family',   days: '7N / 8D', price: 72999, img: DESTINATIONS[7].img,  rating: 4.9, tag: 'International', features: ['Jungle villa', 'Airport pickup', 'Ubud tour', 'Spa credit'] },
    { id: 'paris-romance', dest: 'paris',    name: 'Paris Romance',         type: 'luxury',   days: '8N / 9D', price: 99999, img: DESTINATIONS[8].img,  rating: 4.7, tag: 'International', features: ['Riviera hotel', 'Eiffel dinner cruise', 'Louvre tickets', 'Seine walk'] },
    { id: 'maldives-lux', dest: 'maldives',  name: 'Maldives Overwater',     type: 'luxury',   days: '6N / 7D', price: 159999, img: DESTINATIONS[11].img, rating: 5.0, tag: 'Honeymoon',  features: ['Overwater villa', 'Seaplane transfer', 'All-inclusive', 'Snorkelling'] },
];

const fmtINR = n => '₹' + Number(n).toLocaleString('en-IN');

/* ------------------------------------------------------------
   TOAST
------------------------------------------------------------ */
function showToast(message, type = 'success') {
    let toast = document.querySelector('.cc-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'cc-toast';
        document.body.appendChild(toast);
    }
    const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info' };
    toast.className = `cc-toast ${type}`;
    toast.innerHTML = `<span class="toast-icon"><i class="fa-solid ${icons[type] || icons.info}"></i></span><span>${message}</span>`;
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => toast.classList.remove('show'), 3600);
}

/* ------------------------------------------------------------
   GLOBAL UI (all pages)
------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {

    /* ---- Navbar: scroll state + active link ---- */
    const navbar = document.querySelector('.navbar-custom');
    const onScroll = () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-custom .nav-link').forEach(a => {
        if (a.getAttribute('href') === current) a.classList.add('active');
    });

    /* ---- Reveal on scroll ---- */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* ---- Animated counters ---- */
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const cio = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                cio.unobserve(entry.target);
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const dur = 1600;
                const t0 = performance.now();
                const tick = now => {
                    const p = Math.min((now - t0) / dur, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        }, { threshold: 0.5 });
        counters.forEach(c => cio.observe(c));
    }

    /* ---- Back to top ---- */
    const btt = document.getElementById('backToTop');
    if (btt) {
        window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 500), { passive: true });
        btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ---- Hero video: sound toggle ---- */
    const heroVideo = document.querySelector('.video-hero video');
    const heroSoundBtn = document.getElementById('heroSound');
    if (heroVideo && heroSoundBtn) {
        heroSoundBtn.addEventListener('click', () => {
            heroVideo.muted = !heroVideo.muted;
            const on = !heroVideo.muted;
            heroSoundBtn.classList.toggle('on', on);
            heroSoundBtn.querySelector('i').className = on ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
            heroSoundBtn.querySelector('span').textContent = on ? 'Sound On' : 'Sound Off';
            if (on) heroVideo.play().catch(() => {});
        });
    }

    /* ---- Video cards: click = play/pause, button = sound, link = navigate ---- */
    document.querySelectorAll('.video-card').forEach(card => {
        const video = card.querySelector('video');
        const fab = card.querySelector('.play-fab i');
        const muteBtn = card.querySelector('.card-mute');
        const muteIco = muteBtn.querySelector('i');

        const syncIcons = () => {
            fab.className = video.paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
            muteIco.className = video.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
            muteBtn.classList.toggle('on', !video.muted);
        };

        card.addEventListener('click', e => {
            if (e.target.closest('a,button')) return;
            if (video.paused) video.play().catch(() => {});
            else video.pause();
        });
        muteBtn.addEventListener('click', e => {
            e.stopPropagation();
            video.muted = !video.muted;
            if (!video.muted && video.paused) video.play().catch(() => {});
            syncIcons();
        });
        video.addEventListener('play', syncIcons);
        video.addEventListener('pause', syncIcons);
        video.addEventListener('volumechange', syncIcons);

        // Desktop hover preview (stays muted)
        card.addEventListener('mouseenter', () => {
            if (video.paused) video.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
            if (!video.paused && !card.dataset.pinned) video.pause();
        });
        // Once user explicitly plays, keep it playing after mouse leaves
        video.addEventListener('play', () => {
            if (!video.muted) card.dataset.pinned = '1';
        });
    });

    /* Pause offscreen videos to save bandwidth */
    const vids = document.querySelectorAll('video');
    if ('IntersectionObserver' in window && vids.length) {
        const vio = new IntersectionObserver(entries => {
            entries.forEach(e => {
                const v = e.target;
                if (e.isIntersecting) {
                    if (v.dataset.autoplay !== 'false' && !v.closest('.video-card')) v.play().catch(() => {});
                } else {
                    v.pause();
                }
            });
        }, { threshold: 0.15 });
        vids.forEach(v => vio.observe(v));
    }

    /* ---- Footer year ---- */
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

    /* ---- Generic newsletter form ---- */
    document.querySelectorAll('form.newsletter-form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                showToast('Please enter a valid email address.', 'error');
                return;
            }
            showToast('Subscribed! Exciting deals are on the way.');
            form.reset();
        });
    });

    /* =========================================================
       PAGE MODULES
    ========================================================= */
    const page = current.replace('.html', '');

    /* ---------- DESTINATIONS ---------- */
    if (page === 'destinations') initDestinations();

    /* ---------- PACKAGES ---------- */
    if (page === 'packages') initPackages();

    /* ---------- BOOKING ---------- */
    if (page === 'booking') initBooking();

    /* ---------- CONTACT ---------- */
    if (page === 'contact') initContact();

    /* ---------- AUTH ---------- */
    if (page === 'login' || page === 'signup') initAuth(page);
});

/* ============================================================
   DESTINATIONS PAGE
============================================================ */
function initDestinations() {
    const grid = document.getElementById('destinationGrid');
    const search = document.getElementById('destSearch');
    const pills = document.querySelectorAll('#destFilters .filter-pill');
    let activeCat = 'all';
    let query = '';

    const render = () => {
        const q = query.trim().toLowerCase();
        const list = DESTINATIONS.filter(d =>
            (activeCat === 'all' || d.cat === activeCat) &&
            (!q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q))
        );
        if (!list.length) {
            grid.innerHTML = `<div class="col-12"><div class="empty-state">
                <i class="fa-solid fa-magnifying-glass-location"></i>
                <h5>No destinations found</h5><p>Try a different search or filter.</p></div></div>`;
            return;
        }
        grid.innerHTML = list.map((d, i) => `
            <div class="col-md-6 col-lg-4 reveal" style="--reveal-delay:${(i % 3) * 0.12}s">
                <div class="card card-cc dest-card">
                    <div class="card-img-wrap">
                        <img src="${d.img}" alt="${d.name}" loading="lazy">
                        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${d.rating}</span>
                        <span class="price-tag">from ${fmtINR(d.price)}</span>
                    </div>
                    <div class="card-body">
                        <span class="tag-chip">${d.cat}</span>
                        <h5 class="card-title mt-2">${d.name}, ${d.country}</h5>
                        <p class="meta mb-1"><i class="fa-solid fa-clock"></i>${d.days} trip</p>
                        <p class="meta mb-3"><i class="fa-solid fa-tag"></i>${d.desc}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold text-success">${fmtINR(d.price)} <small class="text-muted fw-normal">/ person</small></span>
                            <a href="packages.html?dest=${d.id}" class="btn btn-sm btn-dark rounded-pill px-3">Packages <i class="fa-solid fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>`).join('');

        // Re-trigger reveal for new nodes
        requestAnimationFrame(() => {
            const io = new IntersectionObserver(es => es.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            }), { threshold: 0.1 });
            grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
        });
    };

    pills.forEach(p => p.addEventListener('click', () => {
        pills.forEach(x => x.classList.remove('active'));
        p.classList.add('active');
        activeCat = p.dataset.cat;
        render();
    }));

    search.addEventListener('input', e => { query = e.target.value; render(); });
    render();
}

/* ============================================================
   PACKAGES PAGE
============================================================ */
function initPackages() {
    const grid = document.getElementById('packageGrid');
    const typeSelect = document.getElementById('typeFilter');
    const destSelect = document.getElementById('destFilter');
    const sortSelect = document.getElementById('sortFilter');
    const params = new URLSearchParams(location.search);

    // Populate destination filter
    destSelect.innerHTML = `<option value="all">All Destinations</option>` +
        DESTINATIONS.map(d => `<option value="${d.id}">${d.name}</option>`).join('');

    const applyUrl = () => {
        const dest = params.get('dest');
        if (dest) destSelect.value = dest;
    };
    applyUrl();

    const render = () => {
        let list = PACKAGES.filter(p =>
            (typeSelect.value === 'all' || p.type === typeSelect.value) &&
            (destSelect.value === 'all' || p.dest === destSelect.value)
        );
        const sort = sortSelect.value;
        if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
        if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);

        grid.innerHTML = list.map((p, i) => {
            const dest = DESTINATIONS.find(d => d.id === p.dest);
            return `
            <div class="col-md-6 col-lg-4 reveal" style="--reveal-delay:${(i % 3) * 0.12}s">
                <div class="card card-cc">
                    <div class="card-img-wrap">
                        <img src="${p.img}" alt="${p.name}" loading="lazy">
                        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                        <span class="price-tag">${fmtINR(p.price)}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge rounded-pill" style="background:var(--cc-gradient)">${p.tag}</span>
                            <small class="text-muted"><i class="fa-regular fa-clock me-1"></i>${p.days}</small>
                        </div>
                        <h5 class="card-title">${p.name}</h5>
                        <p class="meta mb-2"><i class="fa-solid fa-location-dot"></i>${dest ? dest.name + ', ' + dest.country : p.dest}</p>
                        <ul class="list-unstyled small mb-3">
                            ${p.features.map(f => `<li class="mb-1"><i class="fa-solid fa-check text-success me-2"></i>${f}</li>`).join('')}
                        </ul>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <div>
                                <div class="fw-bold fs-5" style="color:var(--cc-primary-dark)">${fmtINR(p.price)}</div>
                                <small class="text-muted">per person</small>
                            </div>
                            <a href="booking.html?package=${p.id}&dest=${p.dest}" class="btn btn-cc btn-sm">Book Now <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        requestAnimationFrame(() => {
            const io = new IntersectionObserver(es => es.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            }), { threshold: 0.1 });
            grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
        });
    };

    [typeSelect, destSelect, sortSelect].forEach(s => s.addEventListener('change', render));
    render();
}

/* ============================================================
   BOOKING PAGE
============================================================ */
function initBooking() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    const pkgSelect = document.getElementById('packageSelect');
    const destSelect = document.getElementById('destinationSelect');
    const dateInput = document.getElementById('travelDate');
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');
    const childPrice = document.getElementById('childPriceInput');
    const btnTotal = document.getElementById('btnTotal');
    const summary = {
        dest: document.getElementById('sumDest'),
        pkg: document.getElementById('sumPkg'),
        date: document.getElementById('sumDate'),
        travelers: document.getElementById('sumTravelers'),
        base: document.getElementById('sumBase'),
        child: document.getElementById('sumChild'),
        tax: document.getElementById('sumTax'),
        total: document.getElementById('sumTotal'),
    };

    // Populate selects
    destSelect.innerHTML = `<option value="">Select destination…</option>` +
        DESTINATIONS.map(d => `<option value="${d.id}">${d.name}, ${d.country}</option>`).join('');
    pkgSelect.innerHTML = `<option value="">Select package…</option>` +
        PACKAGES.map(p => {
            const d = DESTINATIONS.find(x => x.id === p.dest);
            return `<option value="${p.id}" data-dest="${p.dest}">${p.name} — ${d ? d.name : ''} (${fmtINR(p.price)})</option>`;
        }).join('');

    // Date minimum = today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Traveler steppers
    document.querySelectorAll('[data-step]').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.step);
            const min = parseInt(input.min || '0');
            const max = parseInt(input.max || '20');
            let v = parseInt(input.value || '0') + parseInt(btn.dataset.delta);
            input.value = Math.min(max, Math.max(min, v));
            updateSummary();
        });
    });

    // Pre-select from URL params
    const params = new URLSearchParams(location.search);
    const prePkg = params.get('package');
    const preDest = params.get('dest');
    if (prePkg) pkgSelect.value = prePkg;
    if (preDest) {
        // pick first package matching destination if package param missing
        if (!prePkg) {
            const match = PACKAGES.find(p => p.dest === preDest);
            if (match) pkgSelect.value = match.id;
        }
        destSelect.value = preDest;
    }
    // Sync dest when package changes
    pkgSelect.addEventListener('change', () => {
        const opt = pkgSelect.selectedOptions[0];
        if (opt && opt.dataset.dest) destSelect.value = opt.dataset.dest;
        updateSummary();
    });
    destSelect.addEventListener('change', updateSummary);
    dateInput.addEventListener('change', updateSummary);
    [adultsInput, childrenInput, childPrice].forEach(el => el.addEventListener('input', updateSummary));

    function getPkg() { return PACKAGES.find(p => p.id === pkgSelect.value); }
    function getDest() { return DESTINATIONS.find(d => d.id === destSelect.value); }

    function updateSummary() {
        const pkg = getPkg();
        const dest = getDest();
        const adults = parseInt(adultsInput.value || '0');
        const children = parseInt(childrenInput.value || '0');
        const cPrice = parseInt(childPrice.value || '0');

        summary.dest.textContent = dest ? `${dest.name}, ${dest.country}` : '—';
        summary.pkg.textContent = pkg ? `${pkg.name} (${pkg.days})` : '—';
        const d = dateInput.value ? new Date(dateInput.value + 'T00:00:00') : null;
        summary.date.textContent = d ? d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
        summary.travelers.textContent = `${adults} adult${adults === 1 ? '' : 's'}${children ? `, ${children} child${children === 1 ? '' : 'ren'}` : ''}`;

        if (!pkg) {
            ['base', 'child', 'tax', 'total'].forEach(k => summary[k].textContent = '—');
            if (btnTotal) btnTotal.textContent = '₹0';
            return;
        }
        const base = pkg.price * adults;
        const childCost = cPrice * children;
        const subtotal = base + childCost;
        const taxAmt = Math.round(subtotal * 0.05);
        const total = subtotal + taxAmt;

        summary.base.textContent = fmtINR(base);
        summary.child.textContent = children ? fmtINR(childCost) : '—';
        summary.tax.textContent = fmtINR(taxAmt);
        summary.total.textContent = fmtINR(total);
        if (btnTotal) btnTotal.textContent = fmtINR(total);
    }
    updateSummary();

    // Submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        const pkg = getPkg();
        const dest = getDest();
        if (!dest)  return showToast('Please select a destination.', 'error');
        if (!pkg)   return showToast('Please select a package.', 'error');
        if (!dateInput.value) return showToast('Please choose a travel date.', 'error');
        const adults = parseInt(adultsInput.value || '0');
        if (adults < 1) return showToast('At least 1 adult traveler is required.', 'error');

        const name = form.querySelector('#customerName').value.trim();
        const phone = form.querySelector('#customerPhone').value.trim();
        const email = form.querySelector('#customerEmail').value.trim();
        if (name.length < 3) return showToast('Please enter your full name.', 'error');
        if (!/^[+]?[\d\s-]{10,15}$/.test(phone)) return showToast('Please enter a valid phone number.', 'error');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Please enter a valid email.', 'error');
        if (!form.querySelector('#termsCheck').checked) return showToast('Please accept the Terms & Conditions.', 'error');

        const ref = 'CC-' + Date.now().toString(36).toUpperCase();
        const total = summary.total.textContent;
        showToast(`Booking confirmed! Ref: ${ref} — Total ${total}. Confirmation sent to ${email}.`);

        // Show confirmation modal-like alert area then reset
        setTimeout(() => {
            form.reset();
            childPrice.value = '';
            updateSummary();
        }, 800);
    });
}

/* ============================================================
   CONTACT PAGE
============================================================ */
function initContact() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.querySelector('#cName').value.trim();
        const email = form.querySelector('#cEmail').value.trim();
        const phone = form.querySelector('#cPhone').value.trim();
        const message = form.querySelector('#cMessage').value.trim();

        if (name.length < 3)  return showToast('Please enter your name.', 'error');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Please enter a valid email.', 'error');
        if (phone && !/^[+]?[\d\s-]{10,15}$/.test(phone)) return showToast('Phone number looks invalid.', 'error');
        if (message.length < 10) return showToast('Please write a slightly longer message (min 10 chars).', 'error');

        showToast(`Thanks ${name.split(' ')[0]}! Our travel experts will reach out within 24 hours.`);
        form.reset();
    });
}

/* ============================================================
   AUTH PAGES (login / signup)
============================================================ */
function initAuth(page) {
    // Password visibility toggles
    document.querySelectorAll('.pw-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.target);
            const show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            btn.querySelector('i').className = show ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        });
    });

    const form = document.getElementById('authForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value.trim();
        const pass = form.querySelector('input[type="password"]').value;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return showToast('Please enter a valid email address.', 'error');
        }
        if (pass.length < 6) {
            return showToast('Password must be at least 6 characters.', 'error');
        }
        if (page === 'signup') {
            const name = form.querySelector('#signupName');
            if (name && name.value.trim().length < 3) {
                return showToast('Please enter your full name.', 'error');
            }
            const cpass = form.querySelector('#confirmPass');
            if (cpass && cpass.value !== pass) {
                return showToast('Passwords do not match.', 'error');
            }
            showToast('Account created! Welcome aboard — redirecting…');
        } else {
            showToast('Welcome back! Redirecting to your dashboard…');
        }
        setTimeout(() => { location.href = 'index.html'; }, 1400);
    });
}
