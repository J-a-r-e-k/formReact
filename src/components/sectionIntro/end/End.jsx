import Style from './styleEnd.module.scss';
import Icon from '../../../assets/icon-thank-you.svg';

const End = () => {
  return (
    <div className={Style.thankYou}>
      <img src={Icon} alt="planBasic" />
      <h3 className={Style.title}>Thank you!</h3>
      <p className={Style.description}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default End;
