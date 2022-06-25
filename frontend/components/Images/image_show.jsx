import React from 'react';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImage();
  }

  render() {
    if (!this.props.image) return <div></div>

    return (
      <div className="image-show-container">
        <div className="top-margin"></div>
        <div className="image-container">
          <img className="show-image" src={this.props.image.imageUrl}/>
        </div>

        <div className="outer-info-comment-container">
          <div className="inner-info-comment-container">
            <div className="image-info-container">
              <div className="icons">
                <div className="svg-icon">
                  <div className="is-disabled">
                    <svg 
                      width="24" 
                      height="24" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill-rule="evenodd" 
                      clip-rule="evenodd"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  <div className="is-disabled">
                    <svg
                      width="24"
                      height="24"
                      clip-rule="evenodd" 
                      fill-rule="evenodd" 
                      stroke-linejoin="round" 
                      stroke-miterlimit="2" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  <div className="is-disabled">
                    <svg 
                      width="24" 
                      height="24" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill-rule="evenodd" 
                      clip-rule="evenodd"
                    >
                      <path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  <div className="is-disabled">
                    <svg 
                      width="24"
                      height="24"
                      clip-rule="evenodd" 
                      fill-rule="evenodd" 
                      stroke-linejoin="round" 
                      stroke-miterlimit="2" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className="image-show-title">{this.props.image.title}</h2>
              {/* author, Uploaded at */}
              <p className="image-show-description">{this.props.image.description}</p>
              {/* Pulse, icon, numbers */}
              {/* Impression, icon, numbers */}
              {/* Popular, icon, numbers */}
              {/* Category with category */}
              {/* Tags */}
            </div>
            <div className="image-comment-container">
              test
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageShow;