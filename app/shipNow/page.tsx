"use client";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const stores = [
  { name: 'TEMU', logo: '/LogoLoop/vecteezy_temu-app-icon-on-transparent-background_55607316.png' },
  { name: 'AliExpress', logo: '/LogoLoop/aliexpress-icon.png' },
  { name: 'Amazon', logo: '/LogoLoop/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766240.png' },
  { name: 'SHEIN', logo: '/LogoLoop/vecteezy_shein-logo-rounded-shein-logo_54650813.png' },
  { name: 'iHerb', logo: '/LogoLoop/iHerb-Symbol.png' },
  { name: 'eBay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1280px-EBay_logo.svg.png' },
  { name: 'Beauty Bay', logo: '/beautyBay.png' },
  { name: 'KSP', logo: '/LogoLoop/ksp_logo.png' },
  { name: 'IVORY', logo: 'ivory.jpg' },
  { name: 'Nike', logo: '/Nike.jpg' },
  { name: 'Adidas', logo: '/adidas.jpg'},
  // { name: 'Banggood', logo: '/LogoLoop/Banggood.png' },
  { name: 'PatPat', logo: 'PatPat.svg' },
  { name: 'Pull&Bear', logo: '/Pull.png' },
  { name: 'ZARA', logo: '/Zara.jpg' },
  { name: 'STRADIVARIUS', logo: '/LogoLoop/Stradivarius.png' },
];

// Framer Motion variants typed without dynamic resolver complexity
const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 }
};

const StoreCard = ({ store, index, onOpenStore }: { store: { name: string; logo: string }; index: number; onOpenStore: (s: { name: string; logo: string }) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <CardWrapper
      ref={ref}
      as={motion.div}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card">
        <div className="img">
          <img
            src={store.logo}
            alt={`${store.name} logo`}
            className={`store-logo ${store.name === 'eBay' ? 'store-logo--ebay' : ''} ${store.name === 'TEMU' ? 'store-logo--temu' : ''} ${store.name === 'KSP' ? 'store-logo--ksp' : ''} ${store.name === 'Beauty Bay' ? 'store-logo--beautybay' : ''} ${store.name === 'Banggood' ? 'store-logo--banggood' : ''} ${store.name === 'Pull&Bear' ? 'store-logo--pull' : ''} ${store.name === 'Nike' ? 'store-logo--nike' : ''}`}
          />
        </div>
        <div className="text">
          <p className="h3">{store.name}</p>
          <div className="icon-box" onClick={() => onOpenStore(store)} role="button" tabIndex={0}>
            <span className="span">كيفية الطلب</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const ShipNowPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStore, setActiveStore] = useState<{ name: string; logo: string } | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Simple brand colors per store
  const brandColors: Record<string, string> = {
    'SHEIN': '#000000',
    'ZARA': '#000000',
    'Amazon': '#232f3e',
    'iHerb': '#4CAF50',
    'TEMU': '#ff6a00',
    'AliExpress': '#ff3b30',
    'eBay': '#0064d2',
    'Beauty Bay': '#111111',
    'KSP': '#0047ab',
    'IVORY': '#222222',
    'Nike': '#111111',
    'Adidas': '#111111',
    'Banggood': '#ff6a00',
    'PatPat': '#ff4b6e',
    'Pull&Bear': '#1a1a1a',
  };

  // Optional video URLs per store (placeholder links)
  const videoUrls: Record<string, string> = {
    'SHEIN': 'https://www.youtube.com/embed/4UZrsTqkcW4',
    'ZARA': 'https://www.youtube.com/embed/4UZrsTqkcW4',
    'Amazon': 'https://www.youtube.com/embed/4UZrsTqkcW4',
    'iHerb': 'https://www.youtube.com/embed/4UZrsTqkcW4',
  };

  // Lock background scroll when any modal is open
  useEffect(() => {
    const anyOpen = isModalOpen || !!activeStore || isVideoOpen;
    if (anyOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isModalOpen, activeStore, isVideoOpen]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    window.setTimeout(() => setToastMsg(null), 1400);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('تم النسخ');
    } catch (e) {
      // Fallback
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      try { document.execCommand('copy'); } catch { /* noop */ }
      document.body.removeChild(temp);
      showToast('تم النسخ');
    }
  };

  const handleOpenConfirmFromStore = () => {
    setActiveStore(null);
    setIsModalOpen(true);
  };

  const handleSubmitPackage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate submission logic
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <Header>
        <h1>اطلب الآن من أشهر المتاجر العالمية</h1>
        <p className="lead">
          لبدء التسوق من المواقع العالمية، اختر المتجر الذي ترغب بالشراء منه واضغط على زر "كيفية الطلب" للاطلاع على الخطوات الخاصة به.
بعد إتمام عملية الشراء من المتجر الذي اخترته، قم بتأكيد طلبك من خلال الزر أدناه لضمان استلام الطرد بسهولة وسرعة.
        </p>
        <ConfirmButton onClick={() => setIsModalOpen(true)}>تأكيد الطلب</ConfirmButton>
      </Header>
      <StoreGrid>
        {stores.map((store, index) => (
          <StoreCard key={index} store={store} index={index} onOpenStore={(s) => setActiveStore(s)} />
        ))}
      </StoreGrid>

      {/* Store How-To Modal */}
      {activeStore && (
        <StoreModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveStore(null)}
        >
          <StoreModalPanel
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <StoreBrandHeader>
              <StoreLogoWrap>
                <img src={activeStore.logo} alt={`${activeStore.name} logo`} />
              </StoreLogoWrap>
            </StoreBrandHeader>

            <StoreTitle>كيفية الطلب من {activeStore.name}</StoreTitle>
            <StoreDesc>
              قم بالدخول إلى متجر {activeStore.name}، وبعد إضافة المنتجات للسلة وإتمام الطلب، قم بإدخال البيانات كما هو موضح أدناه.
            </StoreDesc>

            <StoreFormGrid>
              <DataItem>
                <Label> <span className="en">First Name</span></Label>
              <ValueRow>
                  <ValueBox>قم بكتابة اسمك الأول</ValueBox>
                 
                </ValueRow>
              </DataItem>
              <DataItem>
                <Label><span className="en">Last Name</span> </Label>
                <ValueRow>
                  <ValueBox>قم بكتابة اسم عائلتك</ValueBox>
                 
                </ValueRow>
              </DataItem>
              <DataItem>
                <Label><span className="en">Phone Number</span></Label>
               <ValueRow>
                  <ValueBox>قم بكتابة رقم هاتفك المحمول</ValueBox>
              
                </ValueRow>
              </DataItem>

              <DataItem>
                <Label> <span className="en">Region / Location</span></Label>
                <ValueRow>
                  <ValueBox>Israel</ValueBox>
                  <CopyBtn type="button" onClick={() => copyToClipboard('Israel')}>نسخ</CopyBtn>
                </ValueRow>
              </DataItem>
              <DataItem>
                <Label>  <span className="en">Address</span></Label>
                <ValueRow>
                  <ValueBox>At-Tur, East Jerusalem</ValueBox>
                  <CopyBtn type="button" onClick={() => copyToClipboard('At-Tur, East Jerusalem')}>نسخ</CopyBtn>
                </ValueRow>
              </DataItem>
              <DataItem>
                <Label> <span className="en">City</span></Label>
                <ValueRow>
                  <ValueBox>Jerusalem</ValueBox>
                  <CopyBtn type="button" onClick={() => copyToClipboard('Jerusalem')}>نسخ</CopyBtn>
                </ValueRow>
              </DataItem>
              <DataItem>
                <Label> <span className="en">Post/ZIP Code</span></Label>
                <ValueRow>
                  <ValueBox>000000</ValueBox>
                  <CopyBtn type="button" onClick={() => copyToClipboard('000000')}>نسخ</CopyBtn>
                </ValueRow>
              </DataItem>
            </StoreFormGrid>

            <InfoNote>ملاحظة: مدة وصول الطرود يعتمد على الشركة الذي تم شراء المنتج منها.</InfoNote>
            <FeeNote>رسوم الشحن: عمولة الطرد 10 شيكل.</FeeNote>
            <SmallInfo>بعد إتمام الطلب وإدخال البيانات كما هو موضح، يُرجى الضغط على نموذج تأكيد الطلب.</SmallInfo>

            <ActionsRow>
              <VideoBtn type="button" onClick={() => setIsVideoOpen(true)}>مشاهدة فيديو توضيحي</VideoBtn>
              <ConfirmOrderBtn type="button" onClick={handleOpenConfirmFromStore}>نموذج تأكيد الطلب</ConfirmOrderBtn>
            </ActionsRow>

            <StoreCloseBtn aria-label="إغلاق" onClick={() => setActiveStore(null)}>×</StoreCloseBtn>
          </StoreModalPanel>
        </StoreModalBackdrop>
      )}

      {/* Copy success toast */}
      <AnimatePresence>
        {toastMsg && (
          <Toast
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.18 }}
          >
            {toastMsg}
          </Toast>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      {isVideoOpen && (
        <StoreModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
          style={{ zIndex: 1400 }}
        >
          <VideoModalPanel
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <VideoTitle>فيديو توضيحي</VideoTitle>
            <div className="video-wrap">
              {activeStore && videoUrls[activeStore.name] ? (
                <iframe
                  width="100%"
                  height="360"
                  src={videoUrls[activeStore.name]}
                  title="Tutorial video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <NoVideoMsg>لا يوجد فيديو متوفر لهذا المتجر حاليًا.</NoVideoMsg>
              )}
            </div>
            <StoreCloseBtn aria-label="إغلاق" onClick={() => setIsVideoOpen(false)}>×</StoreCloseBtn>
          </VideoModalPanel>
        </StoreModalBackdrop>
      )}

      {isModalOpen && (
        <ModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <ModalPanel
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <LogoWrap className="modal-logo small">
              <img src="/logo.svg" alt="Torodi logo" />
            </LogoWrap>
            <Separator />
            <ModalHeader>
             
              <h3>أدخل بيانات الطرد الذي تم شحنه إلى عنوان طرودي</h3>
              <CloseBtn aria-label="إغلاق" onClick={() => setIsModalOpen(false)}>×</CloseBtn>
            </ModalHeader>
            <ModalForm onSubmit={handleSubmitPackage}>
              <Field>
                <label htmlFor="fullName">الاسم الكامل</label>
                <input id="fullName" name="fullName" type="text" required placeholder="اكتب اسمك الكامل"  />
              </Field>
              <Field>
                <label htmlFor="phone">رقم الهاتف</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="05XXXXXXXX" />
              </Field>
              <Field>
                <label htmlFor="address">العنوان</label>
                <input id="address" name="address" type="text" required placeholder="المدينة - الشارع - رقم المبنى" />
              </Field>
              <Field>
                <label htmlFor="siteName">موقع الشراء</label>
                <select id="siteName" name="siteName" required defaultValue="">
                  <option value="" disabled>اختر موقع الشراء</option>
                  {stores.map((s, idx) => (
                    <option key={idx} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </Field>
              <Field>
                <label htmlFor="tracking">رقم التتبع</label>
                <input id="tracking" name="tracking" type="text" required placeholder="مثال: LP123456789US" />
              </Field>
              <Field>
                <label htmlFor="delivery">طريقة الاستلام</label>
                <select id="delivery" name="delivery" required>
                  <option value="">اختر طريقة الاستلام</option>
                  <option value="store">من المخزن</option>
                  <option value="courier">شركة توصيل</option>
                </select>
              </Field>

              <Actions>
                <SubmitBtn type="submit">موافق</SubmitBtn>
                <SmallNote>
                لضمان وصول طرودكم بسرعة، نرجو إدخال البيانات بشكل صحيح وكتابة رقم التتبع الخاص بالطرد وليس رقم الطلبية.
                </SmallNote>
              </Actions>
            </ModalForm>
          </ModalPanel>
        </ModalBackdrop>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 56px 28px 80px;
  max-width: 1380px;
  margin: 0 auto;
  text-align: center;
  direction: rtl;
  background: linear-gradient(180deg,#ffffff 0%, #f8f9fb 28%, #f6f7fa 60%, #f9f9f9 100%);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .lead { font-size: clamp(0.85rem,1vw,1rem); }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem,4vw,2.4rem);
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #1a2042;
    margin: 0;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.9rem,1vw,1rem);
    color: #4c5464;
    line-height: 1.65;
    max-width: 880px;
    margin: 0 auto;
  }
`;

const LogoWrap = styled.div`
  width: clamp(120px, 14vw, 180px);
  height: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  img { width: 100%; height: auto; display: block; }
  &.modal-logo { margin-bottom: 2px; }
  &.small { width: clamp(92px, 12vw, 130px); }
`;

const Separator = styled.div`
  height: 1px;
  width: min(86%, 420px);
  align-self: center;
  background: linear-gradient(90deg, rgba(93,39,170,0), rgba(93,39,170,0.6), rgba(93,39,170,0));
  margin: 4px 0 2px;
`;

const ConfirmButton = styled.button`
  background-color: #ffc200;
  color: #ffffff;
  border: none;
  padding: 14px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 194, 0, 0.35);
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 25px rgba(255, 194, 0, 0.45);
  }
`;

const StoreGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: clamp(22px,2.6vw,36px);
  align-items: stretch;
  margin-top: 8px;
  margin-bottom: 32px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 18px;
  }
`;

const CardWrapper = styled.div`
  .card {
    width: 100%;
    height: 270px;
    background: linear-gradient(180deg, #ffffff 0%, #fff 46%, #5d27aa 47%, #5d27aa 63%, #5d27aa 100%);
    border-radius: 28px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04);
    transition: transform .35s cubic-bezier(.25,.46,.45,.94), box-shadow .35s ease;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  .img {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 22px 16px;
  }
  
  .store-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* Slightly reduce eBay logo so it doesn't visually dominate the card */
  .store-logo--ebay {
    max-height: 72%;
    max-width: 86%;
  }

  /* Slightly increase TEMU logo so it's more prominent */
  .store-logo--temu {
    max-height: 110%;
    max-width: 110%;
    transform: scale(1.06);
    transition: transform 0.18s ease;
  }

  /* Slightly increase KSP logo so it's more prominent */
  .store-logo--ksp {
    /* make KSP a bit smaller than before (slight shrink) */
    max-height: 90%;
    max-width: 90%;
    transform: scale(0.96);
    transition: transform 0.18s ease;
  }

  /* Slightly reduce Beauty Bay logo to balance visual weight */
  .store-logo--beautybay {
    max-height: 78%;
    max-width: 78%;
    transform: scale(0.95);
    transition: transform 0.18s ease;
  }

  /* Slightly reduce Pull&Bear logo to balance visual weight */
  .store-logo--pull {
    max-height: 80%;
    max-width: 80%;
    transform: scale(0.94);
    transition: transform 0.18s ease;
  }

  /* Slightly shrink Banggood logo for balance (requested) */
  .store-logo--banggood {
    max-height: 88%;
    max-width: 88%;
    transform: scale(0.96);
    transition: transform 0.18s ease;
  }

  /* Slightly increase Nike logo for a bit more prominence */
  .store-logo--nike {
    max-height: 106%;
    max-width: 106%;
    transform: scale(1.06);
    transition: transform 0.18s ease;
  }

  .text {
    padding: 14px 18px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    justify-content: flex-start;
    gap: 10px;
  }

  .icon-box {
    margin-top: auto;
    width: 100%;
    padding: 11px 12px;
    background-color: #ffc200;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: 600;
  }

  .icon-box:hover {
    background-color: #1a2042;
  }

  .text .h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: .3px;
    color: #ffffff;
    background: linear-gradient(90deg,#1a2042,#27325f,#1a2042);
    -webkit-background-clip: text;
    mix-blend-mode: normal;
  }

  .icon-box .span {
    font-family: 'Poppins', sans-serif;
    font-size: .85rem;
    font-weight: 600;
    color: #1a2042;
    letter-spacing: .4px;
  }
  
  .icon-box:hover .span {
    color: white;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0 14px 40px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.08);
    transform: translateY(-8px);
  }
`;

export default ShipNowPage;

// ======================= Modal Styled Components =======================
const ModalBackdrop = motion(styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vh 20px;
  z-index: 1200;
`);

const ModalPanel = motion(styled.div`
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0,0,0,0.14), 0 4px 14px rgba(0,0,0,0.08);
  padding: clamp(22px,3.2vw,36px) clamp(24px,3.5vw,40px) clamp(24px,3.6vw,40px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  direction: rtl;
  /* Remove scrollbar and ensure content fits by using multi-column form layout */
  overflow: hidden;
`);

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.05rem,2.4vw,1.25rem);
    font-weight: 700;
    margin: 0;
    color: #5d27aa;
    letter-spacing: .4px;
    line-height: 1.4;
    flex: 1 1 auto;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 12px;
  background: transparent;
  border: none;
  font-size: 1.7rem;
  line-height: 1;
  cursor: pointer;
  color: #5d27aa;
  padding: 4px 8px;
  transition: color .25s ease, transform .25s ease;
  &:hover { color: #ffc200; transform: scale(1.02); }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    font-size: .7rem;
    font-weight: 600;
    color: #27325f;
    font-family: 'Poppins', sans-serif;
  }
  input, select {
    font-family: 'Poppins', sans-serif;
    padding: 8px 10px;
    border: 1px solid #d9dce3;
    border-radius: 12px;
    background: #fdfdfe;
    font-size: .75rem;
    transition: border-color .25s ease, box-shadow .25s ease;
    text-align: center;
  }
  input::placeholder { text-align: center; }
  input:focus, select:focus {
    outline: none;
    border-color: #5d27aa;
    box-shadow: 0 0 0 3px rgba(93,39,170,0.18);
  }
`;

const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
`;

const SubmitBtn = styled.button`
  background: #ffc200;
  color: #ffffff;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: .85rem;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255,194,0,0.35);
  transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
  &:hover {
    background: #ffcd33;
    transform: translateY(-3px);
    box-shadow: 0 10px 26px rgba(255,194,0,0.45);
  }
  &:active { transform: translateY(0); box-shadow: 0 6px 18px rgba(255,194,0,0.35); }
`;

const SmallNote = styled.p`
  font-size: .7rem;
  line-height: 1.4;
  color: #4c5464;
  text-align: center;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

// ======================= Store Modal Styled Components =======================
const StoreModalBackdrop = motion(styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 6vh 18px 4vh;
  z-index: 1300;
  @media (min-width: 720px) {
    align-items: center;
  }
`);

const StoreModalPanel = motion(styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 18px 48px rgba(0,0,0,0.18), 0 4px 14px rgba(0,0,0,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Tajawal', 'Cairo', 'Poppins', sans-serif;
`);

const StoreBrandHeader = styled.div`
  width: 100%;
  padding: 34px 30px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a2042; /* خلفية داكنة حول الشعار */
  border-bottom: 2px solid #1a2042; /* الحد الفاصل أسفل المنطقة العلوية */
`;

const StoreLogoWrap = styled.div`
  width: clamp(120px, 28%, 180px);
  background: #ffffff;
  border: 2px solid #1a2042;
  border-radius: 18px;
  padding: 8px 12px;
  /* Subtle shadow to lift the logo box above the dark header */
  box-shadow: 0 8px 20px rgba(26,32,66,0.12);
  img { width: 100%; height: auto; display: block; filter: none; }
`;

const StoreTitle = styled.h3`
  font-size: clamp(1.2rem,2.2vw,1.55rem);
  font-weight: 700;
  text-align: center;
  margin: 22px 18px 6px;
  color: #5d27aa;
`;

const StoreDesc = styled.p`
  font-size: .8rem;
  text-align: center;
  margin: 0 24px 18px;
  color: #4c5464;
  line-height: 1.55;
`;

const StoreFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 16px 18px;
  padding: 0 26px 6px;
  direction: rtl;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  input {
    border: 1px solid #d9dce3;
    border-radius: 12px;
    padding: 9px 10px;
    font-size: .72rem;
    font-family: inherit;
    text-align: center;
    background: #fdfdfe;
    transition: border-color .25s ease, box-shadow .25s ease;
  }
  input:focus {
    outline: none;
    border-color: #5d27aa;
    box-shadow: 0 0 0 3px rgba(93,39,170,0.18);
  }
`;

const Label = styled.label`
  font-size: .62rem;
  font-weight: 600;
  color: #27325f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: center;
  .en { color: #5d27aa; font-weight: 500; font-size: .68rem; display: block; }
`;

const ValueRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6px;
`;

const ValueBox = styled.div`
  flex: 1 1 auto;
  background: #f6f7fa;
  border: 1px solid #d9dce3;
  border-radius: 12px;
  padding: 9px 10px;
  font-size: .7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #27325f;
`;

const CopyBtn = styled.button`
  background: #5d27aa;
  color: #ffffff;
  border: none;
  font-size: .6rem;
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: background .25s ease, transform .25s ease;
  &:hover { background: #6d39b4; }
  &:active { transform: scale(.94); }
`;

const InfoNote = styled.p`
  font-size: .68rem;
  margin: 8px 26px 4px;
  color: #27325f;
  font-weight: 600;
  text-align: center;
`;

const FeeNote = styled.p`
  font-size: .68rem;
  margin: 0 26px 4px;
  color: #5d27aa;
  font-weight: 600;
  text-align: center;
`;

const SmallInfo = styled.p`
  font-size: .6rem;
  margin: 0 30px 14px;
  color: #4c5464;
  text-align: center;
  line-height: 1.5;
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 14px;
  padding: 0 26px 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const BaseActionBtn = styled.button`
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: .7rem;
  font-weight: 600;
  padding: 11px 20px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
`;

const VideoBtn = styled(BaseActionBtn)`
  background: #1a2042;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(26,32,66,0.25);
  &:hover { background:#27325f; transform: translateY(-3px); }
`;

const ConfirmOrderBtn = styled(BaseActionBtn)`
  background: #ffc200;
  color: #ffffff;
  box-shadow: 0 4px 18px rgba(255,194,0,0.35);
  &:hover { background:#ffcd33; transform: translateY(-3px); }
`;

const StoreCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 12px;
  background: rgba(255,255,255,0.6);
  border: none;
  font-size: 1.7rem;
  line-height: 1;
  cursor: pointer;
  color: #5d27aa;
  padding: 2px 10px 6px;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  transition: color .25s ease, transform .25s ease, background .25s ease;
  &:hover { color: #ffc200; transform: scale(1.04); background: rgba(255,255,255,0.85); }
`;

const VideoModalPanel = motion(styled.div`
  width: 100%;
  max-width: 760px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 18px 48px rgba(0,0,0,0.18), 0 4px 14px rgba(0,0,0,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 32px 36px;
  font-family: 'Tajawal','Cairo','Poppins',sans-serif;
  .video-wrap { width: 100%; aspect-ratio: 16 / 9; background:#000; border-radius: 18px; overflow: hidden; display:flex; align-items:center; justify-content:center; }
  iframe { width: 100%; height: 100%; display: block; }
`);

const VideoTitle = styled.h4`
  font-size: clamp(1rem,2.1vw,1.3rem);
  margin: 0 0 18px;
  font-weight: 700;
  text-align: center;
  color: #5d27aa;
`;

const NoVideoMsg = styled.p`
  font-size: .72rem;
  color: #ffffff;
  text-align: center;
  padding: 12px;
`;

// Small toast for copy success
const Toast = motion(styled.div`
  position: fixed;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26,32,66,0.98);
  color: #fff;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: .78rem;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  z-index: 2000;
  font-family: 'Tajawal','Cairo','Poppins',sans-serif;
`);

