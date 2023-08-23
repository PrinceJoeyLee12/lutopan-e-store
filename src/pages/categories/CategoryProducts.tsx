import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonNote,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { cart, chevronBackOutline, searchOutline } from 'ionicons/icons';
import { getPath } from 'src/utils/routes';
import { Routes } from 'src/constants/index';
import { useLocation } from 'react-router-dom';
import { useSideMenuUpdate, useSideMenu } from 'src/main/SideMenuProvider';
import { defaultSide, tab1SideMenu } from 'src/main/PageSideMenus';
import { PageHeader } from 'src/components/PageHeader';
import CustomPage from 'src/main/CustomPage';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import ProductCard from 'src/components/ProductCard/ProductCard';
import { fetchData } from 'src/modules/fetcher';

import { CartStore } from 'src/modules/CartStore';
import { ProductStore } from 'src/modules/ProductStore';

import styles from './CategoryProducts.module.css';

const CategoryProducts = (props: any) => {
  const params: any = useParams();
  const cartRef = useRef<any>();
  const products = ProductStore.useState((s) => s.products);
  const shopCart = CartStore.useState((s) => s.product_ids);

  const pageName = 'Products Category';
  const { sideMenuOptions } = props;
  const location = useLocation();
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
    fetchData();
  }, []);

  useEffect(() => {
    if (location.pathname === getPath(Routes.PRODUCT_CATEGORIES)) {
      setSideMenu({
        options: defaultSide,
        side: 'start',
        pageName: pageName,
      });
    }
  }, [location]);

  const [category, setCategory] = useState<any>({});
  const [searchResults, setsearchResults] = useState([]);
  const [amountLoaded, setAmountLoaded] = useState(6);

  useEffect(() => {
    const categorySlug = 'beds';
    const tempCategory: any = products.filter(
      (p: any) => p.slug === categorySlug,
    )[0];
    console.log(
      '@@@@@@@@@@@@@:  ~ file: CategoryProducts.tsx:82 ~ tempCategory:',
      tempCategory,
    );
    setCategory(tempCategory);
    setsearchResults(tempCategory?.products);
  }, [params.slug, products]);

  const fetchMore = async (e: any) => {
    //	Increment the amount loaded by 6 for the next iteration
    setAmountLoaded((prevAmount) => prevAmount + 6);
    e.target.complete();
  };

  const search = async (e: any) => {
    const searchVal = e.target.value;

    if (searchVal !== '') {
      const tempResults = category?.products.filter((p: any) =>
        p.name.toLowerCase().includes(searchVal.toLowerCase()),
      );
      setsearchResults(tempResults);
    } else {
      setsearchResults(category?.products);
    }
  };

  return (
    <IonPage id={pageName}>
      <CustomPage name={pageName} sideMenu={true} sideMenuPosition='start'>
        <PageHeader count={sideMenuOptions?.length} pageName={pageName} />

        <IonContent fullscreen>
          <IonSearchbar
            className={styles.search}
            onKeyUp={search}
            placeholder="Try 'high back'"
            searchIcon={searchOutline}
            animated={true}
          />

          <IonGrid>
            <IonRow className='ion-text-center'>
              <IonCol size='12'>
                <IonNote>
                  {searchResults && searchResults?.length}{' '}
                  {searchResults?.length > 1 || searchResults?.length === 0
                    ? ' products'
                    : ' product'}{' '}
                  found
                </IonNote>
              </IonCol>
            </IonRow>

            <IonRow>
              {searchResults &&
                searchResults?.map((product: any, index: number) => {
                  if (index <= amountLoaded && product.image) {
                    return (
                      <ProductCard
                        key={`category_product_${index}`}
                        product={product}
                        index={index}
                        cartRef={cartRef}
                        category={category}
                      />
                    );
                  }
                })}
            </IonRow>
          </IonGrid>

          <IonInfiniteScroll threshold='100px' onIonInfinite={fetchMore}>
            <IonInfiniteScrollContent
              loadingSpinner='bubbles'
              loadingText='Fetching more...'></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      </CustomPage>
    </IonPage>
  );
};

export default CategoryProducts;
