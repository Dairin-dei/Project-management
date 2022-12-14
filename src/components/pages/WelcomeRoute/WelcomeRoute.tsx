import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IState } from '../../../interface/types';
import './WelcomeRoute.css';
import LogInButton from '../reusableComponents/logInButton/LogInButton';
import ToMainRoute from '../reusableComponents/toMainRouteButton/toMainRouteButton';
import SignUpButton from '../reusableComponents/signUpButton/SignUpButton';
import AppLogo from '../reusableComponents/appLogo/AppLogo';
import { useTranslation } from 'react-i18next';
import { checkToken } from '../../../service/servise';
import ScrollAnimation from 'react-animate-on-scroll';

const WelcomeRoute: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const userState = useSelector((state: IState) => state.loginData);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState('English');

  const changeLanguageState = (language: string) => {
    setLanguage(language);
  };

  useEffect(() => {
    checkToken(dispatch, navigate);
  }, []);
  return (
    <section className="welcome-page">
      {userState.token ? (
        <ToMainRoute />
      ) : (
        <>
          <Link to="/signup">
            <SignUpButton />
          </Link>
          <Link to="/login">
            <LogInButton />
          </Link>
        </>
      )}
      <div className="welcome-logo">
        <AppLogo />
      </div>
      <article className="welcome-page_app">
        <h1 className="app-title">Project management app</h1>
        <div className="app-text">{t('welcomeRoute.description')}</div>
        <div className="app-text">{t('welcomeRoute.try')}</div>
      </article>
      <div className="information-block">
        <ScrollAnimation animateIn="fadeIn">
          <div className="information-block-part">
            <article className="info-part-block info-part-block-first">
              <h3 className="info-part-block-header">{t('welcomeRoute.info.board-creacte')}</h3>
              <div className="info-part-block-list">
                <ul>
                  <li>{t('welcomeRoute.info.board')}</li>
                  <li>{t('welcomeRoute.info.organize')}</li>
                  <li>{t('welcomeRoute.info.authotize')}</li>
                </ul>
              </div>
            </article>
            <div className="info-part-block-images"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="information-block-part">
            <div className="info-part-block-images-second"></div>
            <article className="info-part-block info-part-block-second">
              <h3 className="info-part-block-header">{t('welcomeRoute.info.add-task')}</h3>
              <div className="info-part-block-list">
                <ul>
                  <li>{t('welcomeRoute.info.manage')}</li>
                  <li>{t('welcomeRoute.info.work')}</li>
                  <li>{t('welcomeRoute.info.appoint')}</li>
                </ul>
              </div>
            </article>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="information-block-part">
            <article className="info-part-block info-part-block-third">
              <h3 className="info-part-block-header">{t('welcomeRoute.info.never')}</h3>
              <div className="info-part-block-list">
                <ul>
                  <li>{t('welcomeRoute.info.work-org')}</li>
                  <li>{t('welcomeRoute.info.app')}</li>
                  <li>{t('welcomeRoute.info.live')}</li>
                </ul>
              </div>
            </article>
            <div className="info-part-block-images-third"></div>
          </div>
        </ScrollAnimation>
      </div>
      <article className="welcome-page_team">
        <h3 className="welcome-page_team-header">{t('welcomeRoute.team')}</h3>
      </article>

      <article className="welcome-page_course">
        <div className="course-text">
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <div className="course-text-member">
              <div className="course-text-member-name">Olga</div>
              <div className="course-text-member-image image-olga"></div>
              <div className="course-text-member-info">
                <div>-Boards</div>
                <div>-Columns</div>
                <div>-Tasks</div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <div className="course-text-member">
              <div className="course-text-member-name">Artur</div>
              <div className="course-text-member-image image-artur"></div>
              <div className="course-text-member-info">
                <div>-Welcome page</div>
                <div>-DnD</div>
                <div>-Styles</div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <div className="course-text-member">
              <div className="course-text-member-name">Alex</div>
              <div className="course-text-member-image image-alex"></div>
              <div className="course-text-member-info">
                <div>-Authorization</div>
                <div>-API</div>
                <div>-Styles</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </article>
    </section>
  );
};
export default WelcomeRoute;
