/*eslint-disable*/
import axios from 'axios';
const stripe = Stripe(
  `pk_test_51JmCppEIEYpYpih2YSLlMuIAaC1zwc8GbqJRE2yIteCNkGZhfoQZLv9G1C0WKbaOGfDcUGUcZf4J5IYJmn4f6mpS000eShlgrO`
);
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    // get session from server
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`
    );
    console.log(session);
    // create checkout form + process credit charge payment
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
