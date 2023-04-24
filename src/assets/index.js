import banner from './banner.jpg';
import logo from './logo.png';
import soon1x from './soon.png';
import soon2x from './soon@2x.png';
import soon3x from './soon@3x.png';
import cashback1x from './cashback.png';
import cashback2x from './cashback@2x.png';
import cashback3x from './cashback@3x.png';
import jackpot1x from './jackpot.png';
import jackpot2x from './jackpot@2x.png';
import jackpot3x from './jackpot@3x.png';
import example from './example-icon.png';
import travelSm from './travel-icon-sm.png';
import ticketSm from './ticket-icon-sm.png';
import airpodsSm from './airpods-icon-sm.png';
import promoLeft from './promo-left-img-m.png';
import promoLeftBig from './promo-left-img.png';
import promoRight from './promo-right-img-m.png';
import promoRightBig from './promo-right-img.png';
import mechanic from './mechanic-icon.png';
import finalBanner from './final-info-img.jpg';
import finalTicket from './final-item-ticket-icon.png';
import finalChip from './final-item-event-icon.png';
import finalHotel from './final-item-hotel-icon.png';
import finalPlaneTicket1 from './poker-item-1-ticket-icon.png';
import finalPlaneTicket2 from './poker-item-2-ticket-icon.png';

const prizes = [
  {
    text: 'The Festival in Philipines-ს საგზური',
    img: travelSm,
  },
  {
    text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Philipines-ს საგზური',
    img: ticketSm,
  },
  {
    text: 'Apple Airpods',
    img: airpodsSm,
  },
];

const festivalCategory = [
  {
    img: finalTicket,
    text: 'ორმხრივი ავიაბილეთი',
  },
  {
    img: finalHotel,
    text: 'The Festival in Malta -ს მეინ ივენთის ბაი-ინი',
  },
  {
    img: finalChip,
    text: 'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
  },
  {
    img: finalTicket,
    text: 'სასტუმრო',
  },
  {
    img: finalTicket,
    text: '€500 სახარჯი ფული',
  },
];

const tickets = [
  {
    heading: '„Holdem Grinders”',
    paragraphs: ['C კატეგორიის 1 საგზური'],
    img: 't1',
    warning: '',
  },
  {
    heading: '“Cashgame Sharks”',
    paragraphs: ['C კატეგორიის 1 საგზური'],
    img: 't1',
    warning: '',
  },
  {
    heading: '„Holdem Grinders”',
    paragraphs: ['C კატეგორიის 1 საგზური'],
    img: 't1',
    warning: '',
  },
  {
    heading: '„The Festival in Malta, GTD“',
    paragraphs: ['B კატეგორიის 1 საგზური', 'C კატეგორიის 1 საგზური'],
    img: 't2',
    warning:
      '*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
  },
  {
    heading: '„Holdem Grinders”',
    paragraphs: ['C კატეგორიის 1 საგზური'],
    img: 't1',
    warning:
      '*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.',
  },
];

const soon = [
  { src: soon1x, dencity: '1x' },
  { src: soon2x, dencity: '2x' },
  { src: soon3x, dencity: '3x' },
];

const cashback = [
  { src: cashback1x, dencity: '1x' },
  { src: cashback2x, dencity: '2x' },
  { src: cashback3x, dencity: '3x' },
];

const jackpot = [
  { src: jackpot1x, dencity: '1x' },
  { src: jackpot2x, dencity: '2x' },
  { src: jackpot3x, dencity: '3x' },
];

export {
  finalBanner,
  banner,
  logo,
  soon,
  cashback,
  jackpot,
  example,
  ticketSm,
  prizes,
  promoLeft,
  promoLeftBig,
  promoRight,
  promoRightBig,
  mechanic,
  festivalCategory,
  tickets,
  finalPlaneTicket1,
  finalPlaneTicket2,
};
