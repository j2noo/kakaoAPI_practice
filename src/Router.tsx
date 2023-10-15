import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import Oauth from "./Oauth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoLogin />} />
        <Route path="/oauth" element={<Oauth />} />
        {/* <Route path="/signup" element={<SignupPage />}>
          <Route path="agreement" element={<Agreement />} />
          <Route path="information" element={<Information />} />
          <Route path="complete" element={<Complete />} />
        </Route>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products/:productId/purchase" element={<PurchasePage />}>
          <Route path="information" element={<PurchaseInformation />} />
          <Route path="checkPayment" element={<CheckPayment />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orderComplete" element={<OrderComplete />} />
        </Route>
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:postId" element={<BlogDetailPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/article/:articleId" element={<NewsDetailPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/brand" element={<BrandIntroductionPage />} />
        <Route path="/halter" element={<HicardiHalterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/monitoring" element={<MonitoringPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
