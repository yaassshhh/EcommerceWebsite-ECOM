import React from "react";
import Layout from "./../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. privacy policy</p>
          <p>2. privacy policy</p>
          <p>3. privacy policy</p>
          <p>4. privacy policy</p>
          <p>5. privacy policy</p>
          <p>6. privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
