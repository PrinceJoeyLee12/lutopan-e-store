import { useEffect, useState } from 'react';
import { getPath } from 'src/utils/routes';
import { Routes } from 'src/constants/index';
import { checkmarkOutline, mailUnreadOutline } from 'ionicons/icons';
import { useSideMenuUpdate, useSideMenu } from '../main/SideMenuProvider';

import './Tab2.css';
import CustomPage from '../main/CustomPage';

import { PageHeader } from '../components/PageHeader';
import { Modal } from '../components/Modal';
import {
  IonBadge,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
} from '@ionic/react';
import { getInboxItems } from '../main/Utils';

const Tab2 = (props: any) => {
  const pageName = 'Inbox';
  var { sideMenuOptions } = props;
  const setSideMenu = useSideMenuUpdate();

  const [Badge, setBadge] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  const inboxItems = getInboxItems();

  const handleModal = async (index: any) => {
    await setModalOptions(sideMenuOptions[index]);
    setShowModal(true);
  };

  //	Access other side menu options here
  const sideMenu = useSideMenu();

  useEffect(() => {
    if (
      props.location.pathname === getPath(Routes.PRODUCT_CATEGORIES) &&
      sideMenuOptions?.length
    ) {
      setSideMenu({
        options: sideMenuOptions,
        side: 'start',
        pageName: pageName,
      });

      sideMenuOptions = sideMenuOptions.filter(
        (m: any) => m.title === 'Timestamp style',
      )[0].clickEvent = () => setBadge((Badge) => !Badge);
    }
  }, [props.location]);

  return (
    <IonPage id={pageName}>
      <CustomPage name={pageName} sideMenu={true} sideMenuPosition='end'>
        <IonGrid>
          <PageHeader count={sideMenuOptions.length} pageName={pageName} />

          <IonList>
            {inboxItems.map((item, index) => {
              return (
                <IonItem
                  routerLink={`${getPath(Routes.PRODUCT_CATEGORIES)}/${
                    item.id
                  }`}
                  key={`item_${index}`}
                  detail={true}
                  lines='full'
                  detailIcon={
                    item.unread ? mailUnreadOutline : checkmarkOutline
                  }>
                  <IonLabel>
                    <h2>{item.sender}</h2>
                    <h4>{item.subject}</h4>
                    <p>{item.message}</p>
                  </IonLabel>
                  {Badge && (
                    <IonBadge slot='end' style={{ fontSize: '0.7rem' }}>
                      {item.time}
                    </IonBadge>
                  )}

                  {!Badge && (
                    <IonNote slot='end' style={{ fontSize: '0.9rem' }}>
                      {item.time}
                    </IonNote>
                  )}
                </IonItem>
              );
            })}
          </IonList>
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

export default Tab2;
