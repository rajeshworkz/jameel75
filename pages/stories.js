import React from "react";
import Layout from "../components/Layout";
// import "../public/static/js/stories/stories.js";
import { Component } from "react";
import Story from "../components/Story";
import StoriesDetail from "../components/StoriesDetail";
import fetch from "isomorphic-unfetch";



export default class stories extends Component {
  
  componentDidMount () {
    const script = document.createElement("script");
    script.src = ["/static/js/stories/stories.js"];
    script.type = 'text/javascript';
    script.async = true;

    document.body.appendChild(script);
}


  static async getInitialProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    console.log(data);
    
    return { data };
  }

  renderData = (data) => {
    return data.map((data) => (
      <Story
        key={data.id}
        order={data.id}
        name={data.title}
        description={data.title}
        image="static/images/stories/3.png"
      />
    ));
  };
  

  render() {
    return (
      <Layout>
        <section className="container-fluid fixed-page stories-page p-0">
          <div className="title">
            <span></span>
            <h1>Stories.</h1>
          </div>

          <div className="row">
            <div className="stories-section">
              <h4>Click on the pictures below to see their storeis.</h4>
              <div className="stories-actions-wrapper">
                <div className="stories-actions d-flex flex-row flex-wrap align-items-center">
                  {this.renderData(this.props.data)}
                </div>

                <img
                  src="static/images/stories/75mask.png"
                  className="mask-75"
                />
              </div>

              <div className="stories-search">
                <div>
                  <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button className="btn" type="submit">
                      <img
                        src="static/images/icons/search.png"
                        width="17"
                        height="17"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="stories-detail-section">
              <div className="detail-header d-flex justify-content-end align-items-center">
                <div className="share">
                  <img src="static/images/icons/share.png" />
                </div>
                <div className="close">
                  <img src="static/images/icons/close.png" />
                </div>
              </div>

              <StoriesDetail
                title="Hear from our Associates"
                image="static/images/future.jpg"
                subtitle="Peter Aberle"
                description={
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie. Mauris malesuada nisi sit amet augue accumsan
                    tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
                    tortor eros facilisis libero, vitae commodo nunc quam et
                    ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Integer id nisi nec nulla
                    luctus lacinia non eu turpis. Etiam in ex imperdiet justo
                    tincidunt egestas. Ut porttitor urna ac augue cursus
                    tincidunt sit amet sed orci.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas varius tortor nibh,
                    sit amet tempor nibh finibus et. Aenean eu enim justo.
                    Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi
                    sit amet augue accumsan tincidunt. Maecenas tincidunt, velit
                    ac porttitor pulvinar, tortor eros facilisis libero, vitae
                    commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Integer
                    id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex
                    imperdiet justo tincidunt egestas. Ut porttitor urna ac
                    augue cursus tincidunt sit amet sed orci.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie. Mauris malesuada nisi sit amet augue accumsan
                    tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
                    tortor eros facilisis libero, vitae commodo nunc quam et
                    ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Integer id nisi nec nulla
                    luctus lacinia non eu turpis. Etiam in ex imperdiet justo
                    tincidunt egestas. Ut porttitor urna ac augue cursus
                    tincidunt sit amet sed orci.
                  </p>
                }
              />

              <div className="detail-footer d-flex justify-content-between align-items-center">
                <div>
                  <img src="static/images/icons/prev.png" /> PREVIOUS
                </div>
                <div>
                  NEXT <img src="static/images/icons/next.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
