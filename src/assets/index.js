import banner from './banner.jpg';
import logo from './logo.png';
import soon from './soon.png';
import cashback from './cashback.png';
import jackpot from './jackpot.png';
import example from './example-icon.png';
import travelSm from './travel-icon-sm.png';
import ticketSm from './ticket-icon-sm.png';
import airpodsSm from './airpods-icon-sm.png';
import ipadSm from './ipad-icon-sm.png';
import watchSm from './watch-icon-sm.png';
import playstationSm from './playstation-icon-sm.png';
import oculusSm from './oculus-icon-sm.png';
import marshallTravelSm from './marshall-travel-icon-sm.png';
import promoLeft from './promo-left-img-m.png';
import promoRight from './promo-right-img-m.png';
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
  {
    text: 'Apple Ipad',
    img: ipadSm,
  },
  {
    text: 'Marshll Travel',
    img: marshallTravelSm,
  },
  {
    text: 'Oculus Headset',
    img: oculusSm,
  },
  {
    text: 'Playstation',
    img: playstationSm,
  },
  {
    text: 'Apple Watch',
    img: watchSm,
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

export {
  finalBanner,
  banner,
  logo,
  soon,
  cashback,
  jackpot,
  example,
  prizes,
  promoLeft,
  promoRight,
  festivalCategory,
  tickets,
  finalPlaneTicket1,
  finalPlaneTicket2,
};
