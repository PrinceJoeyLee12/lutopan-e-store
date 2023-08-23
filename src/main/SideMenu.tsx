import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonMenu,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react';
import { useSideMenu } from './SideMenuProvider';

import '../theme/SideMenu.css';

const SideMenu = (props: any) => {
  const { type = 'overlay' } = props;
  const mainContent = props.children;
  const menuOptions = useSideMenu();

  return (
    menuOptions?.options?.length > 0 && (
      <IonMenu
        contentId={menuOptions.pageName}
        side={menuOptions.side}
        type={type}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent forceOverscroll={false} id='main'>
          {mainContent}

          <IonListHeader>{menuOptions.pageName}</IonListHeader>

          {menuOptions !== null && (
            <IonList lines='none'>
              {menuOptions &&
                menuOptions.options.map((menuOption: any, i: number) => {
                  if (!Boolean(menuOption?.url)) {
                    return (
                      <IonMenuToggle key={i} autoHide={true}>
                        <IonItem
                          onClick={menuOption.clickEvent}
                          lines='none'
                          detail={false}>
                          <IonIcon slot='start' icon={menuOption.icon} />
                          <IonLabel>{menuOption.text}</IonLabel>
                        </IonItem>
                      </IonMenuToggle>
                    );
                  } else {
                    if (menuOption?.url) {
                      return (
                        <IonMenuToggle key={i} autoHide={true}>
                          <IonItem
                            detail={false}
                            routerLink={menuOption.url}
                            lines='none'>
                            <IonIcon slot='start' icon={menuOption.icon} />
                            <IonLabel>{menuOption.text}</IonLabel>
                          </IonItem>
                        </IonMenuToggle>
                      );
                    }
                  }
                })}
            </IonList>
          )}
        </IonContent>
      </IonMenu>
    )
  );
};

export default SideMenu;
