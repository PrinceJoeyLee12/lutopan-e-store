import { useEffect, useState } from 'react';
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';
import {
  cogOutline,
  eyeOutline,
  logOutOutline,
  mailOutline,
  mapOutline,
  settingsOutline,
} from 'ionicons/icons';

import './Product.css';
import CustomPage from 'src/main/CustomPage';

import { PageHeader } from 'src/components/PageHeader';
import { Modal } from 'src/components/Modal';
import { useSideMenuUpdate, useSideMenu } from 'src/main/SideMenuProvider';
import { Link } from 'react-router-dom';
import { tab1SideMenu } from 'src/main/PageSideMenus';

const Tab1 = (props: any) => {
  const pageName = 'Profile';
  const { sideMenuOptions } = props;
  const setSideMenu = useSideMenuUpdate();

  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  const handleModal = async (index: any) => {
    await setModalOptions(tab1SideMenu?.[index] as any);
    setShowModal(true);
  };

  //	Access other side menu options here
  const sideMenu = useSideMenu();

  useEffect(() => {
    if (props.location.pathname === '/tabs/tab1') {
      setSideMenu({
        options: sideMenuOptions,
        side: 'start',
        pageName: pageName,
      });
    }
  }, [props.location]);

  return (
    <IonPage id={pageName}>
      <CustomPage name={pageName} sideMenu={true} sideMenuPosition='start'>
        <PageHeader count={sideMenuOptions.length} pageName={pageName} />

        <IonItem lines='none'>
          <IonAvatar>
            <IonImg src='/assets/alan.jpg' />
          </IonAvatar>
          <IonLabel className='ion-text-wrap ion-padding'>
            <h1>Author</h1>
            <h2>
              Alan Montgomery
              <span className='role'>
                <IonBadge color='primary'>Mobile Team Lead</IonBadge>
              </span>
            </h2>
            <p>
              Hey there, I'm Alan! Hopefully you can take something away from
              this little sample app. Or even if it's to have a poke around and
              see how I personally like to do things, that's OK too 👏🏻. Check
              out each page, side menu and have a look at how things work.
            </p>
          </IonLabel>
        </IonItem>
        <IonGrid>
          <IonRow className='ion-text-center'>
            <IonCol size='12'>
              <IonText color='primary'>
                <p>Contact me on twitter if you need anything else :)</p>
                <a
                  href='https://twitter.com/intent/tweet?screen_name=93alan&ref_src=twsrc%5Etfw'
                  className='twitter-mention-button'
                  data-size='large'
                  data-related='93alan,93alan'
                  data-dnt='true'
                  data-show-count='false'>
                  Tweet to @93alan
                </a>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className='ion-text-center'>
            <IonCol size='12'>
              <IonText>
                <h4>Check out Mobile DevCast</h4>
                <p>
                  A podcast dedicated to mobile app development and web native
                  technology like ionic & capacitor!
                </p>
                <IonText color='warning'>
                  <a
                    style={{ color: 'yellow' }}
                    href='https://mobiledevcast.com'
                    target='_blank'
                    rel='noreferrer'>
                    https://mobiledevcast.com
                  </a>
                </IonText>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        {showModal && modalOptions && (
          <Modal
            showModal={showModal}
            modalOptions={modalOptions}
            close={() => setShowModal(false)}
          />
        )}
      </CustomPage>
    </IonPage>
  );
};

export default Tab1;
