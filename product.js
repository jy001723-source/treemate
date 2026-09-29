  /* ==========================================================================
     공통 상품 데이터셋
     ========================================================================== */
  const PRODUCTS = {
    'p1': {
      id: 'p1', name: '몬스테라 델리시오사 6호 (토분 포함)', price: 57800, originPrice: 68000, discount: '15%',
      brand: '초록상점', category: '관엽식물', badge: '입고 3일',
      img: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=800&auto=format&fit=crop',
      desc: '넓고 독특한 잎 찢어짐이 매력적인 플랜테리어의 정석 식물입니다. 공기정화 능력이 뛰어나며 실내 적응력이 우수합니다.',
      careWater: '겉흙이 2~3cm 말랐을 때 화분 밑으로 흘러나올 때까지 듬뿍 관수합니다.',
      careLight: '직사광선을 피한 은은한 거실 창가나 커튼 너머 반양지에서 가장 건강하게 자랍니다.'
    },
    'p2': {
      id: 'p2', name: '스투키 3연 세트 (초보자 추천)', price: 34900, originPrice: 34900, discount: '',
      brand: '그루하우스', category: '다육·선인장', badge: '초보자 추천',
      img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=800&auto=format&fit=crop',
      desc: '전자파 차단과 야간 음이온 방출로 침실이나 책상 위에 두기 가장 좋은 다육 식물입니다. 물을 자주 주지 않아도 잘 자랍니다.',
      careWater: '한 달에 한 번 소량 물을 줍니다. 과습에 주의하세요.',
      careLight: '빛이 적은 음지에서도 씩씩하게 잘 견디는 강한 생명력을 자랑합니다.'
    },
    'p3': {
      id: 'p3', name: '떡갈고무나무 대형 1.2m', price: 102400, originPrice: 128000, discount: '20%',
      brand: '초록상점', category: '관엽식물', badge: '품절임박',
      img: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop',
      desc: '물결 모양의 널찍한 잎이 시원한 공간감을 연출해줍니다. 카페나 거실의 중심을 잡아주는 대표 대형 관엽식물입니다.',
      careWater: '속흙까지 말랐을 때 샤워기로 잎까지 흠뻑 샤워 관수해줍니다.',
      careLight: '통풍이 잘 드는 창가나 베란다에서 생장이 왕성합니다.'
    },
    'p4': {
      id: 'p4', name: '수제 유약 토분 3size 세트', price: 37800, originPrice: 42000, discount: '10%',
      brand: '테라코타랩', category: '화분·토분', badge: '인기상품',
      img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop',
      desc: '자연스러운 텍스처와 뛰어난 통기성을 자랑하는 천연 이태리 점토 수제 토분입니다. 식물의 뿌리 호흡을 돕습니다.',
      careWater: '자연 토분 특성상 물 마름이 빠르므로 식물 상태를 자주 확인해주세요.',
      careLight: '모든 환경에 잘 어울리는 감성적인 컬러감'
    },
    'p5': {
      id: 'p5', name: '산세베리아 실린드리카', price: 28000, originPrice: 28000, discount: '',
      brand: '초록상점', category: '다육·선인장', badge: '키우기 쉬움',
      img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop',
      desc: '원통형의 독특한 줄기가 모던한 미니멀 인테리어에 안성맞춤입니다. 건조에 매우 강합니다.',
      careWater: '속흙이 바짝 마를 때까지 건조하게 관리합니다 (월 1회).',
      careLight: '직사광선부터 반음지까지 어느 환경이든 무난히 적응합니다.'
    },
    'p6': {
      id: 'p6', name: '금전수 4호 (개업선물 추천)', price: 39600, originPrice: 45000, discount: '12%',
      brand: '그루하우스', category: '관엽식물', badge: '선물추천',
      img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=800&auto=format&fit=crop',
      desc: '동전을 닮은 반짝이는 잎이 재물운을 불러온다는 의미를 지녀 개업 및 집들이 선물로 1순위입니다.',
      careWater: '알뿌리에 수분을 저장하므로 과습을 피하고 건조하게 관리합니다.',
      careLight: '실내 형광등 불빛으로도 싱그럽게 잘 자랍니다.'
    },
    'p7': {
      id: 'p7', name: '테이블야자 소형 2개입', price: 22000, originPrice: 22000, discount: '',
      brand: '초록상점', category: '관엽식물', badge: '공기정화',
      img: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=800&auto=format&fit=crop',
      desc: '화학물질 흡착 능력이 탁월하여 책상 위 컴퓨터 옆에 두기 좋은 미니 야자입니다.',
      careWater: '주 1회 물주기, 건조할 때 잎 주변에 가볍게 분무해주세요.',
      careLight: '직사광선에 잎이 탈 수 있으므로 실내 반그늘이 좋습니다.'
    },
    'p8': {
      id: 'p8', name: '허브 씨앗 6종 키트', price: 19700, originPrice: 24000, discount: '18%',
      brand: '씨드박스', category: '씨앗·구근', badge: 'DIY 키트',
      img: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=800&auto=format&fit=crop',
      desc: '바질, 로즈마리, 페퍼민트 등 키우는 재미와 요리의 즐거움을 동시에 선사하는 씨앗 키트입니다.',
      careWater: '싹이 틀 때까지 스프레이로 표면을 항상 촉촉하게 유지합니다.',
      careLight: '햇빛이 하루 4시간 이상 잘 드는 양지가 좋습니다.'
    },
    'p9': {
      id: 'p9', name: '가드닝 무드등 원목형', price: 49000, originPrice: 49000, discount: '',
      brand: '초록상점', category: '가드닝 조명', badge: '감성조명',
      img: 'https://images.unsplash.com/photo-1416339306562-c98a0c9f6b7e?q=80&w=800&auto=format&fit=crop',
      desc: '식물 생장에 필요한 파장과 은은한 인테리어 조명을 동시에 제공하는 원목 스탠드입니다.',
      careWater: '전자기기이므로 물이 닿지 않도록 주의해주세요.',
      careLight: '하루 6~8시간 조사를 권장합니다.'
    }
  };

  /* ==========================================================================
     현재 페이지 상태 관리
     ========================================================================== */
  const urlParams = new URLSearchParams(window.location.search);
  const currentProdId = urlParams.get('id') || 'p1';
  const currentProd = PRODUCTS[currentProdId] || PRODUCTS['p1'];

  let orderQty = 1;

  /* ==========================================================================
     상품 데이터 렌더링
     ========================================================================== */
  function initProductPage() {
    // 1. 브레드크럼 & 타이틀
    document.title = `${currentProd.name} — 초록상점`;
    document.getElementById('bcCategory').textContent = currentProd.category;
    document.getElementById('bcName').textContent = currentProd.name;

    // 2. 비주얼 이미지
    document.getElementById('mainProdImg').src = currentProd.img;
    document.getElementById('prodBadge').textContent = currentProd.badge || currentProd.category;

    // 썸네일 리스트 구성
    const thumbs = [
      currentProd.img,
      'https://images.unsplash.com/photo-1545165375-1b744b9ed444?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop'
    ];
    document.getElementById('thumbContainer').innerHTML = thumbs.map((src, i) => `
      <div class="thumb-item ${i===0?'active':''}" onclick="changeThumb('${src}', this)">
        <img src="${src}" alt="썸네일 ${i+1}">
      </div>
    `).join('');

    // 3. 케어 가이드 & 설명
    document.getElementById('careWater').textContent = currentProd.careWater || '겉흙이 마르면 듬뿍 관수합니다.';
    document.getElementById('careLight').textContent = currentProd.careLight || '은은한 반양지를 선호합니다.';
    document.getElementById('prodLongDesc').textContent = currentProd.desc;

    // 4. 우측 구매 패널
    document.getElementById('panelBrand').textContent = currentProd.brand;
    document.getElementById('panelTitle').textContent = currentProd.name;
    
    if (currentProd.discount) {
      document.getElementById('panelDiscount').textContent = currentProd.discount;
      document.getElementById('panelDiscount').style.display = 'inline';
      document.getElementById('panelStrike').textContent = currentProd.originPrice.toLocaleString() + '원';
      document.getElementById('panelStrike').style.display = 'inline';
    } else {
      document.getElementById('panelDiscount').style.display = 'none';
      document.getElementById('panelStrike').style.display = 'none';
    }
    document.getElementById('panelFinal').textContent = currentProd.price.toLocaleString() + '원';

    calculateTotal();
    updateHeaderCartBadge();
  }

  function changeThumb(src, el) {
    document.getElementById('mainProdImg').src = src;
    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  /* ==========================================================================
     금액 계산 및 수량 조절
     ========================================================================== */
  function changeQty(delta) {
    orderQty += delta;
    if (orderQty < 1) orderQty = 1;
    if (orderQty > 99) orderQty = 99;
    document.getElementById('qtyDisplay').textContent = orderQty;
    calculateTotal();
  }

  function calculateTotal() {
    const potExtra = parseInt(document.getElementById('optPot').value) || 0;
    const addonExtra = parseInt(document.getElementById('optAddon').value) || 0;
    
    const unitPrice = currentProd.price + potExtra + addonExtra;
    const subtotal = unitPrice * orderQty;
    const shipFee = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipFee;

    document.getElementById('totalDisplay').textContent = total.toLocaleString() + '원';
    return { subtotal, shipFee, total, unitPrice, potExtra, addonExtra };
  }

  /* ==========================================================================
     장바구니 담기 (공통 localStorage 연동)
     ========================================================================== */
  function addToCartCurrent() {
    const { unitPrice } = calculateTotal();
    const potText = document.getElementById('optPot').options[document.getElementById('optPot').selectedIndex].text;
    
    const cartItem = {
      id: `${currentProd.id}_${Date.now()}`,
      prodId: currentProd.id,
      name: `${currentProd.name} (${potText.split(' ')[0]})`,
      price: unitPrice,
      img: currentProd.img,
      qty: orderQty
    };

    let cart = [];
    try {
      const saved = localStorage.getItem('greenstore_cart');
      if (saved) cart = JSON.parse(saved);
    } catch(e) {}

    cart.push(cartItem);
    localStorage.setItem('greenstore_cart', JSON.stringify(cart));
    updateHeaderCartBadge();

    showToast(`🛒 [${currentProd.name}] ${orderQty}개가 장바구니에 담겼습니다!`);
  }

  function updateHeaderCartBadge() {
    let cart = [];
    try {
      const saved = localStorage.getItem('greenstore_cart');
      if (saved) cart = JSON.parse(saved);
    } catch(e) {}
    const count = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
    document.getElementById('cartBadgeCount').textContent = count;
  }

  /* ==========================================================================
     바로 구매하기 & 주문관리자(admin.html) 실시간 연동
     ========================================================================== */
  function openOrderModal(preferredMethod = '카카오페이') {
    const { total } = calculateTotal();
    const potText = document.getElementById('optPot').options[document.getElementById('optPot').selectedIndex].text;
    const addonText = document.getElementById('optAddon').options[document.getElementById('optAddon').selectedIndex].text;

    document.getElementById('mProdName').textContent = currentProd.name;
    document.getElementById('mProdOption').textContent = `옵션: ${potText} / ${addonText} (수량 ${orderQty}개)`;
    document.getElementById('mTotalPrice').textContent = total.toLocaleString() + '원';
    document.getElementById('orderPayMethod').value = preferredMethod;

    document.getElementById('orderModal').classList.add('open');
  }

  function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('open');
  }

  /* ==========================================================================
     포트원(아임포트) 결제창 호출 및 주문관리자(admin.html) 연동
     ========================================================================== */
  function submitDirectOrder() {
    const { subtotal, shipFee, total } = calculateTotal();
    const buyerName = document.getElementById('orderBuyerName').value.trim() || '김초록';
    const buyerPhone = document.getElementById('orderBuyerPhone').value.trim() || '010-9876-5432';
    const buyerAddr = document.getElementById('orderBuyerAddr').value.trim() || '서울시 마포구 성지길 25, 402호';
    const buyerMemo = document.getElementById('orderBuyerMemo').value.trim() || '부재 시 경비실에 맡겨주세요';
    const payMethod = document.getElementById('orderPayMethod').value;
    const potText = document.getElementById('optPot').options[document.getElementById('optPot').selectedIndex].text;

    const now = new Date();
    const dateStr = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    const orderNo = `ORD_${Date.now()}_${Math.floor(100 + Math.random()*900)}`;

    // 포트원 SDK 로드 확인
    if (typeof window.IMP === 'undefined') {
      alert('포트원 결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp19424728"); // 포트원 공식 무료 테스트 가맹점 코드

    // PG사 및 결제방식 매핑
    let pg = "html5_inicis";
    let portoneMethod = "card";

    if (payMethod === '카카오페이') {
      pg = 'kakaopay.TC0ONETIME';
      portoneMethod = 'card';
    } else if (payMethod === '토스페이') {
      pg = 'tosspayments';
      portoneMethod = 'card';
    } else if (payMethod === '가상계좌') {
      pg = 'html5_inicis';
      portoneMethod = 'vbank';
    } else {
      pg = 'html5_inicis';
      portoneMethod = 'card';
    }

    closeOrderModal();
    showToast('💳 포트원 결제창을 불러오는 중입니다...');

    IMP.request_pay({
      pg: pg,
      pay_method: portoneMethod,
      merchant_uid: orderNo,
      name: `${currentProd.name} (${orderQty}개)`,
      amount: total,
      buyer_email: "buyer@greenstore.com",
      buyer_name: buyerName,
      buyer_tel: buyerPhone,
      buyer_addr: buyerAddr,
      buyer_postcode: "04000"
    }, function(rsp) {
      if (rsp.success) {
        // 결제 성공 시: 주문 데이터 생성 및 localStorage 저장
        const newOrder = {
          no: orderNo,
          impUid: rsp.imp_uid,
          applyNum: rsp.apply_num || 'TEST_AUTH',
          date: dateStr,
          buyerName: buyerName,
          buyerId: 'user_' + Math.floor(Math.random() * 900 + 100),
          phone: buyerPhone,
          email: 'buyer@greenstore.com',
          items: [
            {
              name: `${currentProd.name} [${potText.split(' ')[0]}]`,
              qty: orderQty,
              price: currentProd.price,
              img: currentProd.img
            }
          ],
          itemsLabel: currentProd.name,
          itemsMore: 0,
          shipName: buyerName,
          addr: buyerAddr,
          memo: buyerMemo,
          subtotal: subtotal,
          shipFee: shipFee,
          total: total,
          method: payMethod,
          status: 'paid'
        };

        let existingOrders = [];
        try {
          const saved = localStorage.getItem('greenstore_orders');
          if (saved) existingOrders = JSON.parse(saved);
        } catch(e) {}
        existingOrders.unshift(newOrder);
        localStorage.setItem('greenstore_orders', JSON.stringify(existingOrders));

        alert(`🎉 [포트원 테스트 결제 성공!]\n\n실제 결제창 프로세스가 정상 승인되었습니다.\n\n- 주문번호: ${orderNo}\n- 승인번호: ${rsp.apply_num || rsp.imp_uid}\n- 결제수단: ${payMethod}\n- 결제금액: ${total.toLocaleString()}원\n\n[주문관리자] 페이지에서 '결제완료' 주문으로 실시간 확인 가능합니다.`);
      } else {
        showToast(`⚠️ 결제 취소: ${rsp.error_msg || '사용자가 결제를 취소했습니다.'}`);
      }
    });
  }

  /* ==========================================================================
     토스트 피드백
     ========================================================================== */
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // 초기화 실행
  window.addEventListener('DOMContentLoaded', initProductPage);
