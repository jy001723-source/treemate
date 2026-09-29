  /* ==========================================================================
     데이터베이스 및 상태 관리
     ========================================================================== */
  const PRODUCTS = {
    'p1': {
      id: 'p1', name: '몬스테라 델리시오사 6호 (토분 포함)', price: 57800, brand: 'Tree Mate', category: '관엽식물',
      img: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=600&auto=format&fit=crop',
      desc: '넓고 독특한 잎 찢어짐이 매력적인 플랜테리어의 정석 식물입니다. 공기정화 능력이 뛰어나며 실내 적응력이 우수합니다.',
      care: '물주기: 겉흙이 2~3cm 말랐을 때 듬뿍 관수 | 채광: 직사광선 피한 은은한 반양지'
    },
    'p2': {
      id: 'p2', name: '스투키 3연 세트 (초보자 추천)', price: 34900, brand: '그루하우스', category: '다육·선인장',
      img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=600&auto=format&fit=crop',
      desc: '전자파 차단과 야간 음이온 방출로 침실이나 책상 위에 두기 가장 좋은 다육 식물입니다. 물을 자주 주지 않아도 잘 자랍니다.',
      care: '물주기: 한 달에 한 번 소량 물주기 | 채광: 음지에서도 잘 견디는 강인한 생명력'
    },
    'p3': {
      id: 'p3', name: '떡갈고무나무 대형 1.2m', price: 102400, brand: 'Tree Mate', category: '관엽식물',
      img: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=600&auto=format&fit=crop',
      desc: '물결 모양의 널찍한 잎이 시원한 공간감을 연출해줍니다. 카페나 거실의 중심을 잡아주는 대표 대형 관엽식물입니다.',
      care: '물주기: 속흙까지 말랐을 때 샤워기로 흠뻑 관수 | 채광: 통풍이 잘 드는 창가'
    },
    'p4': {
      id: 'p4', name: '수제 유약 토분 3size 세트', price: 37800, brand: '테라코타랩', category: '화분·토분',
      img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop',
      desc: '자연스러운 텍스처와 뛰어난 통기성을 자랑하는 천연 이태리 점토 수제 토분입니다. 뿌리의 통기를 돕습니다.',
      care: '특징: 물빠짐이 원활하여 과습 예방에 탁월 | 배수구망 포함 세트'
    },
    'p5': {
      id: 'p5', name: '산세베리아 실린드리카', price: 28000, brand: 'Tree Mate', category: '다육·선인장',
      img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600&auto=format&fit=crop',
      desc: '원통형의 독특한 줄기가 모던한 미니멀 인테리어에 안성맞춤입니다. 건조에 매우 강합니다.',
      care: '물주기: 속흙이 바짝 마를 때까지 건조하게 관리 | 환경: 어느 환경이든 무난히 적응'
    },
    'p6': {
      id: 'p6', name: '금전수 4호 (개업선물 추천)', price: 39600, brand: '그루하우스', category: '관엽식물',
      img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=600&auto=format&fit=crop',
      desc: '동전을 닮은 반짝이는 잎이 재물운을 불러온다는 의미를 지녀 개업 및 집들이 선물로 1순위입니다.',
      care: '물주기: 구근에 물을 저장하므로 과습 주의 (월 1~2회 관수) | 채광: 반그늘 선호'
    },
    'p7': {
      id: 'p7', name: '테이블야자 소형 2개입', price: 22000, brand: 'Tree Mate', category: '관엽식물',
      img: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=600&auto=format&fit=crop',
      desc: '페인트 냄새나 화학물질 흡착 능력이 탁월하여 책상 위 컴퓨터 옆에 두기 좋은 미니 야자입니다.',
      care: '물주기: 주 1회 물주기, 건조할 때 잎 주변 분무 | 채광: 형광등 빛으로도 생장 가능'
    },
    'p8': {
      id: 'p8', name: '허브 씨앗 6종 키트', price: 19700, brand: '씨드박스', category: '씨앗·구근',
      img: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=600&auto=format&fit=crop',
      desc: '바질, 로즈마리, 페퍼민트, 캐모마일 등 키우는 재미와 요리의 즐거움을 동시에 선사하는 씨앗 키트.',
      care: '물주기: 발아 전까지 스프레이로 촉촉하게 유지 | 채광: 햇살이 잘 드는 창가'
    },
    'p9': {
      id: 'p9', name: '가드닝 무드등 원목형', price: 49000, brand: 'Tree Mate', category: '가드닝 조명',
      img: 'https://images.unsplash.com/photo-1416339306562-c98a0c9f6b7e?q=80&w=600&auto=format&fit=crop',
      desc: '자연광 파장의 LED를 내장하여 일조량이 부족한 실내에서도 식물이 싱그럽게 자라도록 돕는 감성 조명입니다.',
      care: '사용법: 하루 6~8시간 조사 추천 | 타이머 기능 내장'
    },
    'p10': {
      id: 'p10', name: '클래식 황동 물조개 분무기', price: 24000, brand: '테라코타랩', category: '원예도구',
      img: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?q=80&w=600&auto=format&fit=crop',
      desc: '세월이 흐를수록 빈티지한 멋이 더해지는 황동 소재 미세 분무기입니다.',
      care: '특징: 잎 분무 및 습도 유지에 최적의 분사력'
    }
  };

  /* 룸 쇼룸 데이터 */
  const ROOM_DATA = {
    'living': {
      img: 'https://images.unsplash.com/photo-1545165375-1b744b9ed444?q=80&w=1200&auto=format&fit=crop',
      items: [
        { num: 1, top: '32%', left: '22%', prodId: 'p1', name: '몬스테라 델리시오사 6호', price: 57800, img: PRODUCTS['p1'].img },
        { num: 2, top: '58%', left: '48%', prodId: 'p4', name: '수제 유약 토분 M', price: 18000, img: PRODUCTS['p4'].img },
        { num: 3, top: '68%', left: '76%', prodId: 'p9', name: '가드닝 무드등 원목형', price: 49000, img: PRODUCTS['p9'].img }
      ]
    },
    'veranda': {
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop',
      items: [
        { num: 1, top: '40%', left: '30%', prodId: 'p3', name: '떡갈고무나무 대형 1.2m', price: 102400, img: PRODUCTS['p3'].img },
        { num: 2, top: '65%', left: '60%', prodId: 'p10', name: '클래식 황동 분무기', price: 24000, img: PRODUCTS['p10'].img }
      ]
    },
    'desk': {
      img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
      items: [
        { num: 1, top: '35%', left: '45%', prodId: 'p2', name: '스투키 3연 세트', price: 34900, img: PRODUCTS['p2'].img },
        { num: 2, top: '60%', left: '72%', prodId: 'p7', name: '테이블야자 미니', price: 22000, img: PRODUCTS['p7'].img }
      ]
    }
  };

  /* 장바구니 상태 동기화 */
  let cart = [];
  try {
    const saved = localStorage.getItem('greenstore_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}

  /* ==========================================================================
     쇼룸(Room) 인터랙션 렌더링 함수
     ========================================================================== */
  function renderRoom(roomKey) {
    const data = ROOM_DATA[roomKey];
    if (!data) return;

    const mainImg = document.getElementById('roomMainImg');
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = data.img;
      mainImg.style.opacity = '1';
    }, 150);

    const hsContainer = document.getElementById('hotspotContainer');
    hsContainer.innerHTML = '';

    const listContainer = document.getElementById('roomProductList');
    listContainer.innerHTML = '';

    data.items.forEach(item => {
      const pin = document.createElement('div');
      pin.className = 'hotspot';
      pin.style.top = item.top;
      pin.style.left = item.left;
      pin.id = `hotspot-${item.num}`;
      pin.innerHTML = `
        ${item.num}
        <div class="hotspot-tooltip">${item.name} (${item.price.toLocaleString()}원)</div>
      `;

      pin.addEventListener('mouseenter', () => highlightItem(item.num, true));
      pin.addEventListener('mouseleave', () => highlightItem(item.num, false));
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        highlightItem(item.num, true);
        const row = document.getElementById(`room-row-${item.num}`);
        if (row) row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      hsContainer.appendChild(pin);

      const row = document.createElement('div');
      row.className = 'room-list-item';
      row.id = `room-row-${item.num}`;
      row.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div style="flex:1;">
          <div class="item-num">${item.num}</div>
          <div class="name">${item.name}</div>
          <div class="price">${item.price.toLocaleString()}원</div>
        </div>
        <button class="add-btn" onclick="event.stopPropagation(); addToCart('${item.prodId}', '${item.name}', ${item.price}, '${item.img}')">담기</button>
      `;

      row.addEventListener('mouseenter', () => highlightPin(item.num, true));
      row.addEventListener('mouseleave', () => highlightPin(item.num, false));
      row.addEventListener('click', () => openQuickView(item.prodId));

      listContainer.appendChild(row);
    });
  }

  function highlightItem(num, isHighlight) {
    document.querySelectorAll('.room-list-item').forEach(r => r.classList.remove('highlight'));
    const row = document.getElementById(`room-row-${num}`);
    if (row && isHighlight) {
      row.classList.add('highlight');
    }
  }

  function highlightPin(num, isHighlight) {
    const pin = document.getElementById(`hotspot-${num}`);
    if (pin) {
      if (isHighlight) pin.classList.add('active');
      else pin.classList.remove('active');
    }
  }

  document.querySelectorAll('.room-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.room-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const roomKey = tab.getAttribute('data-room');
      renderRoom(roomKey);
    });
  });

  /* ==========================================================================
     장바구니 시스템
     ========================================================================== */
  function addToCart(id, name, price, img) {
    const existing = cart.find(item => item.id === id || item.prodId === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, prodId: id, name, price, img, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`[${name}]을(를) 장바구니에 담았습니다.`);
  }

  function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
      saveCart();
      updateCartUI();
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    showToast('장바구니에서 상품을 삭제했습니다.');
  }

  function saveCart() {
    try {
      localStorage.setItem('greenstore_cart', JSON.stringify(cart));
    } catch(e) {}
  }

  function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

    const headerCount = document.getElementById('headerCartCount');
    const mobileCount = document.getElementById('mobileCartCount');
    const titleCount = document.getElementById('cartCountTitle');
    const totalSum = document.getElementById('cartTotalSum');

    if (headerCount) headerCount.textContent = totalQty;
    if (mobileCount) mobileCount.textContent = totalQty;
    if (titleCount) titleCount.textContent = totalQty;
    if (totalSum) totalSum.textContent = totalPrice.toLocaleString() + '원';

    const list = document.getElementById('cartItemsList');
    if (!list) return;

    if (cart.length === 0) {
      list.innerHTML = `<div class="cart-empty">장바구니가 비어 있습니다.<br>마음에 드는 식물을 담아보세요!</div>`;
    } else {
      list.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${((item.price) * (item.qty || 1)).toLocaleString()}원</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
              <span style="font-size:13px; font-weight:600; min-width:20px; text-align:center;">${item.qty || 1}</span>
              <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-del" onclick="removeFromCart('${item.id}')" title="삭제">&times;</button>
        </div>
      `).join('');
    }
  }

  function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartDrawer').classList.add('open');
  }

  function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartDrawer').classList.remove('open');
  }

  function handleCheckout() {
    if (cart.length === 0) {
      showToast('장바구니가 비어 있습니다.');
      return;
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
    const shipFee = subtotal >= 50000 ? 0 : 3000;
    const totalPrice = subtotal + shipFee;

    const now = new Date();
    const dateStr = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    const orderNo = `ORD_${Date.now()}_${Math.floor(100 + Math.random()*900)}`;
    const itemsTitle = `${cart[0].name}${cart.length > 1 ? ' 외 ' + (cart.length - 1) + '건' : ''}`;

    if (typeof window.IMP === 'undefined') {
      alert('포트원 결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp19424728"); // 포트원 공식 무료 테스트 가맹점 코드

    closeCart();
    showToast('포트원 결제창을 불러오는 중입니다...');

    IMP.request_pay({
      pg: "kakaopay.TC0ONETIME",
      pay_method: "card",
      merchant_uid: orderNo,
      name: itemsTitle,
      amount: totalPrice,
      buyer_email: "green@example.com",
      buyer_name: "김초록",
      buyer_tel: "010-9876-5432",
      buyer_addr: "서울시 마포구 성지길 25, 402호",
      buyer_postcode: "04000"
    }, function(rsp) {
      if (rsp.success) {
        const newOrder = {
          no: orderNo,
          impUid: rsp.imp_uid,
          applyNum: rsp.apply_num || 'TEST_AUTH',
          date: dateStr,
          buyerName: '김초록',
          buyerId: 'green_kim',
          phone: '010-9876-5432',
          email: 'green@example.com',
          items: cart.map(item => ({
            name: item.name,
            qty: item.qty || 1,
            price: item.price,
            img: item.img
          })),
          itemsLabel: cart[0].name,
          itemsMore: cart.length > 1 ? cart.length - 1 : 0,
          shipName: '김초록',
          addr: '서울시 마포구 성지길 25, 402호',
          memo: '배송 전 연락 부탁드립니다',
          subtotal: subtotal,
          shipFee: shipFee,
          total: totalPrice,
          method: '카카오페이',
          status: 'paid'
        };

        let existingOrders = [];
        try {
          const saved = localStorage.getItem('greenstore_orders');
          if (saved) existingOrders = JSON.parse(saved);
        } catch(e) {}
        existingOrders.unshift(newOrder);
        localStorage.setItem('greenstore_orders', JSON.stringify(existingOrders));

        alert(`[포트원 장바구니 결제 성공!]\n\n실제 결제창 테스트가 정상 승인되었습니다.\n\n- 주문번호: ${orderNo}\n- 승인번호: ${rsp.apply_num || rsp.imp_uid}\n- 주문 상품: ${itemsTitle}\n- 결제 금액: ${totalPrice.toLocaleString()}원`);

        cart = [];
        saveCart();
        updateCartUI();
      } else {
        showToast(`결제 취소: ${rsp.error_msg || '사용자가 결제를 취소했습니다.'}`);
      }
    });
  }

  document.getElementById('btnOpenCart').addEventListener('click', openCart);
  document.getElementById('btnMobileCart').addEventListener('click', openCart);

  /* ==========================================================================
     상세 페이지 이동
     ========================================================================== */
  function openQuickView(prodId) {
    window.location.href = `product.html?id=${prodId}`;
  }

  function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open');
  }

  /* ==========================================================================
     검색 기능
     ========================================================================== */
  function openSearchModal(keyword) {
    document.getElementById('searchModal').classList.add('open');
    document.getElementById('searchInput').value = keyword || '';
    document.getElementById('searchInput').focus();
    renderSearchResults(keyword || '');
  }

  document.getElementById('btnHeaderSearch').addEventListener('click', () => {
    const q = document.getElementById('headerSearchInput').value.trim();
    openSearchModal(q);
    document.getElementById('headerSearchInput').value = '';
  });

  document.getElementById('headerSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      openSearchModal(q);
      e.target.value = '';
    }
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(keyword) {
    const resBox = document.getElementById('searchResults');
    if (!keyword) {
      resBox.innerHTML = '<div style="font-size:13px; color:#888; text-align:center; padding:20px;">검색어를 입력해보세요 (예: 몬스테라, 토분, 스투키)</div>';
      return;
    }

    const matched = Object.values(PRODUCTS).filter(p => 
      p.name.toLowerCase().includes(keyword.toLowerCase()) || 
      p.category.toLowerCase().includes(keyword.toLowerCase()) ||
      p.brand.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matched.length === 0) {
      resBox.innerHTML = `<div style="font-size:13px; color:#888; text-align:center; padding:20px;">'${keyword}'에 대한 검색 결과가 없습니다.</div>`;
      return;
    }

    resBox.innerHTML = matched.map(p => `
      <div class="search-item" onclick="openQuickView('${p.id}'); closeModal('searchModal');">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <div style="font-size:11.5px; color:var(--ink-soft);">${p.brand} · ${p.category}</div>
          <div style="font-size:13.5px; font-weight:600; color:var(--ink);">${p.name}</div>
          <div style="font-size:13px; font-weight:700; color:var(--forest);">${p.price.toLocaleString()}원</div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     카테고리 필터링
     ========================================================================== */
  function filterByCategory(category) {
    document.querySelectorAll('.cat-item').forEach(item => {
      if (item.getAttribute('data-category') === category) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });

    const cards = document.querySelectorAll('#mainProductGrid .card');
    let visibleCount = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    showToast(`'${category === 'all' ? '전체' : category}' 카테고리 상품 ${visibleCount}종 표시`);
    document.getElementById('best').scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-category');
      filterByCategory(cat);
    });
  });

  /* ==========================================================================
     로그인 모달
     ========================================================================== */
  document.getElementById('btnOpenLogin').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('open');
  });
  document.getElementById('btnMobileLogin').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('open');
  });

  /* ==========================================================================
     토스트 알림 함수
     ========================================================================== */
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    toastText.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // 초기 룸 쇼룸 및 장바구니 로드
  window.addEventListener('DOMContentLoaded', () => {
    renderRoom('living');
    updateCartUI();
  });
