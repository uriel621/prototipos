import React from "react";
import { Link } from "react-router-dom";

const style_footer = {
  	"border":"solid black 1px",
  	"backgroundColor":"rgb(144, 194, 70)",
};

const style_inner_footer = {
  	"position":"relative",
  	'textAlign':'center',
  	"fontSize":"20px",
  	"color":"white",
	"fontFamily": "Reem Kufi, Helvetica Neue, Helvetica, sans-serif"
}

const style_list_container = {
	"fontSize":"20px"
}
const style_list = {
  "marginTop":"30px",
  "marginBottom":"30px"
}

const style_anchors = {
  "textDecoration":"none",
  "color":"white",
}


const style_section_donate = {
	"fontSize":"20px",
	"paddingLeft":"50px",
	"paddingRight":"50px",
	"textAlign":"center",
}

const style_section_button = {
	"display": "inlineBlock",
    "background":"rgb(144, 194, 70)",
    "color": "white",
    "padding": "15px 1.5em",
    "borderRadius": "0.25em",
    "fontFamily": "Reem Kufi, Helvetica Neue, Helvetica, sans-serif",
    "border": "1px solid",
    "textDecoration": "none",
    "cursor": "pointer",
    "fontSize": "inherit",
    "textTransform": "uppercase",
    "lineHeight": "inherit",
    "textAlign": "center",
	"boxSizing": "borderBox",
	"background": "white",
    "color": "black",
    "borderColor": "white",
    "textTransform": "unset",
}

const style_section_email_input = {
	"display": "inlineBlock",
    "lineHeight": "inherit",
    "fontFamily": "inherit",
    "fontSize": "inherit",
    "padding":" 0.375em 0.75em",
    "borderRadius":" 0.25em",
    "border": "1px solid black",
    "borderColor": "rgba(0, 0, 0, 0.25)",
    "width": "100%%",
    "maxWidth": "100%",
    "boxSizing": "borderBox",
}

const style_icon_outer_color = {
	"fill":"white"
	
}

const style_icon_inner_color = {
	"fill":"rgb(144, 194, 70)"
}

const style_icon_spacing = {
	"marginLeft": "10px",
    "marginRight": "10px",
}

class Footer extends React.Component {
	constructor(props){
		super(props);
		console.log(621)
	}
	render(){
		return(
			<footer id="navigation" style={ style_footer }>
			<div style={ style_inner_footer }>
				<h3>Healthy food for all Angelenos</h3>
				<div style={ style_list_container }>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">Add a Location</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">Organizations</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">Resources</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">About</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">Team</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">News</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">FAQs</Link></div>
					<div onClick={ window.scroll(0,0) } style={ style_list }><Link style={ style_anchors } to="/engage_landing/about">Donate</Link></div>
				</div>

				<section>
					<h2>Sponsored by</h2>
					<div>
						<div>
							<a href="http://www.hackforla.org" className="hack-for-la">
								<img src="https://foodoasis.la/assets/images/hackforla-monochrome.svg" alt="Hack for LA" />
							</a>
						</div>
						<br />
						<div>
							<a href="http://www.codeforamerica.org" className="code-for-america">
								<img src="https://foodoasis.la/assets/images/codeforamerica-monochrome.svg" alt="Code for America" />
							</a>
						</div>
					</div>
				</section>
				<br /><br />
				 <section style={ style_section_donate } id="donate">
					<h2>Support this project</h2>
					<p>We’re a volunteer-based project and would love your donation!
							On the donation page, please choose <em>Los Angeles Brigade</em> and make it in honor of <em>Food Oasis LA</em> with the email address <em>info@foodoasis.la</em></p>
	
					<br />
					<br />
					<p className="action"><a style={ style_section_button } href="https://www.codeforamerica.org/donate" target="_blank">Donate</a></p>
				</section>
				<br /><br /><br />
				<section  style={ style_section_donate }id="mailing-list">
					<h2>Subscribe to our mailing list</h2>
					<p>Hear the latest from Food Oasis LA!</p>
	
					<form action="//foodoasis.us15.list-manage.com/subscribe/post?u=cc58c677c486e6ca3ca80afe6&amp;id=e77a0f6b67" method="post" target="_blank">
						<p>
							<label>
								<input style={ style_section_email_input }  type="email" name="EMAIL" placeholder="Email" />
							</label>
						</p>
	
						<div hidden>
							<input type="text" name="b_cc58c677c486e6ca3ca80afe6_e77a0f6b67" tabIndex="-1" value="" />
						</div>
	
						<p className="action">
							<button style={ style_section_button } type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe</button>
						</p>
					</form>
				</section>
				<br /><br />
	
				<section style={ style_section_donate } className="contact" id="contact">
			<h2>Have a question? Want to help?</h2>
			<p className="join"></p><p>Join us at <a style={ style_anchors } href="https://www.meetup.com/hackforla/">Hack for LA</a>, Tuesdays at 6pm</p>
	<p></p>
	<br />
	
			<p className="action"><a style={ style_section_button } href="mailto:contact@foodoasis.la">Send us a message</a></p>
			<br />
			<div>
				<a style={ style_icon_spacing }  href="mailto:contact@foodoasis.la">
					<svg className="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
						<switch>
							<g>
								<path style={ style_icon_outer_color } className="circle" d="M0,30 C0,13.4314567 13.4508663,0 30.0433526,0 C46.6358389,0 60.0867052,13.4314567 60.0867052,30 C60.0867052,46.5685433 46.6358389,60 30.0433526,60 C13.4508663,60 0,46.5685433 0,30 Z" id="back" fill="#DC4E41"></path>
								<path style={ style_icon_inner_color } className="icon" d="M45.4186047,39.6 C45.4186047,40.0456 45.0683256,40.4 44.6223721,40.4 L15.3768372,40.4 C14.938,40.4 14.5813953,40.0392 14.5813953,39.6 L14.5813953,20.4 C14.5813953,20.1496 14.6984186,19.9376 14.8739535,19.7904 L28.2762791,32.5968 C29.225907,33.504 30.7725116,33.5064 31.7237209,32.5968 L45.1236744,19.7928 C45.3,19.9408 45.4186047,20.1528 45.4186047,20.4 L45.4186047,39.6 Z M43.0227907,19.6 L30.638093,31.4336 C30.2965116,31.7592 29.7034884,31.7592 29.361907,31.4336 L16.9772093,19.6 L43.0227907,19.6 Z M45.4668372,18.1632 C45.2644186,18.0616 44.9868837,18 44.6223721,18 L15.3768372,18 C15.0091628,18 14.7308372,18.0616 14.5292093,18.1632 C13.6325581,18.508 13,19.376 13,20.4 L13,39.6 C13,40.9216 14.0642791,42 15.3768372,42 L44.6223721,42 C45.9452093,42 47,40.9256 47,39.6 L47,20.4 C47,19.3784 46.3611163,18.5088 45.4668372,18.1632 L45.4668372,18.1632 Z" fill="#FFFFFF"></path>
							</g>
							<foreignObject>Email</foreignObject>
						</switch>
					</svg>
				</a>
	
				<a style={ style_icon_spacing } href="http://fb.me/foodoasisla">
					<svg className="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
						<switch>
							<g>
								<path style={ style_icon_outer_color } className="circle" d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#3B5998"></path>
								<path style={ style_icon_inner_color } className="icon" d="M32.1269439,46.6393459 L32.1269439,30.317762 L36.6324148,30.317762 L37.229487,24.6932538 L32.1269439,24.6932538 L32.1345986,21.8781333 C32.1345986,20.411175 32.2739793,19.6251452 34.3809551,19.6251452 L37.1975921,19.6251452 L37.1975921,14 L32.6914833,14 C27.2789219,14 25.3738406,16.7284916 25.3738406,21.3169565 L25.3738406,24.6938908 L22,24.6938908 L22,30.318399 L25.3738406,30.318399 L25.3738406,46.6393459 L32.1269439,46.6393459 Z" fill="#FFFFFF"></path>
							</g>
							<foreignObject>Facebook</foreignObject>
						</switch>
					</svg>
				</a>
	
				<a style={ style_icon_spacing } href="http://twitter.com/foodoasisla">
					<svg className="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
						<switch>
							<g>
								<path style={ style_icon_outer_color } className="circle" d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#55ACEE"></path>
								<path style={ style_icon_inner_color } className="icon" d="M29.1015033,24.3843758 L29.1644564,25.4224435 L28.1152374,25.2953331 C24.2960803,24.8080769 20.9595639,23.1556426 18.1266726,20.3804004 L16.7417035,19.0033719 L16.3849691,20.0202545 C15.6295314,22.2870554 16.1121721,24.6809665 17.6860006,26.2910307 C18.5253758,27.180803 18.3365164,27.3079133 16.8885942,26.778287 C16.3849691,26.6088065 15.9442971,26.4816962 15.9023283,26.5452514 C15.7554377,26.6935467 16.2590628,28.6213867 16.657766,29.3840487 C17.2033599,30.4433014 18.315532,31.4813691 19.5326261,32.0957357 L20.5608607,32.582992 L19.3437666,32.604177 C18.1686414,32.604177 18.1266726,32.6253621 18.2525789,33.0702482 C18.6722665,34.4472768 20.3300325,35.9090455 22.1766579,36.5445972 L23.4776895,36.9894833 L22.344533,37.6674051 C20.6657826,38.6419176 18.6932509,39.192729 16.7207192,39.2350991 C15.7764221,39.2562842 15,39.3410244 15,39.4045796 C15,39.6164301 17.5600943,40.8027932 19.0499853,41.2688644 C23.5196582,42.645893 28.8287063,42.0527114 32.8157385,39.7011703 C35.6486298,38.027551 38.4815211,34.7014974 39.803537,31.4813691 C40.5170059,29.7653797 41.2304749,26.6299916 41.2304749,25.1258527 C41.2304749,24.1513402 41.293428,24.0242299 42.4685533,22.8590518 C43.1610378,22.1811301 43.8115536,21.4396532 43.9374599,21.2278026 C44.1473037,20.8252866 44.1263193,20.8252866 43.0561159,21.1854325 C41.2724436,21.8209842 41.0206311,21.7362439 41.901975,20.7829165 C42.5524908,20.1049947 43.3289128,18.8762616 43.3289128,18.5161156 C43.3289128,18.4525605 43.0141471,18.5584857 42.6574127,18.7491512 C42.2796938,18.9610018 41.4403186,19.2787776 40.8107873,19.4694431 L39.6776307,19.829589 L38.6493961,19.1304822 C38.0828179,18.7491512 37.2854114,18.3254501 36.8657238,18.1983398 C35.7955205,17.901749 34.1587388,17.9441191 33.1934574,18.28308 C30.5704099,19.2364075 28.9126439,21.6938738 29.1015033,24.3843758 Z" fill="#FFFFFF"></path>
							</g>
							<foreignObject>Twitter</foreignObject>
						</switch>
					</svg>
				</a>
	
				<a style={ style_icon_spacing } href="https://www.instagram.com/foodoasisla/">
					<svg className="instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
						<switch>
							<g>
								<path style={ style_icon_outer_color } className="circle" d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#3B5998"></path>
								<path style={ style_icon_inner_color } className="icon" d="M30,17.7c4,0,4.5,0,6.1,0.1c1.5,0.1,2.3,0.3,2.8,0.5c0.7,0.3,1.2,0.6,1.7,1.1c0.5,0.5,0.8,1,1.1,1.7 c0.2,0.5,0.4,1.3,0.5,2.8c0.1,1.6,0.1,2.1,0.1,6.1s0,4.5-0.1,6.1c-0.1,1.5-0.3,2.3-0.5,2.8c-0.3,0.7-0.6,1.2-1.1,1.7 c-0.5,0.5-1,0.8-1.7,1.1c-0.5,0.2-1.3,0.4-2.8,0.5c-1.6,0.1-2.1,0.1-6.1,0.1s-4.5,0-6.1-0.1c-1.5-0.1-2.3-0.3-2.8-0.5 c-0.7-0.3-1.2-0.6-1.7-1.1c-0.5-0.5-0.8-1-1.1-1.7c-0.2-0.5-0.4-1.3-0.5-2.8c-0.1-1.6-0.1-2.1-0.1-6.1s0-4.5,0.1-6.1 c0.1-1.5,0.3-2.3,0.5-2.8c0.3-0.7,0.6-1.2,1.1-1.7c0.5-0.5,1-0.8,1.7-1.1c0.5-0.2,1.3-0.4,2.8-0.5C25.5,17.7,26,17.7,30,17.7 M30,15c-4.1,0-4.6,0-6.2,0.1c-1.6,0.1-2.7,0.3-3.6,0.7c-1,0.4-1.8,0.9-2.7,1.7c-0.8,0.8-1.3,1.7-1.7,2.7c-0.4,1-0.6,2-0.7,3.6 C15,25.4,15,25.9,15,30c0,4.1,0,4.6,0.1,6.2c0.1,1.6,0.3,2.7,0.7,3.6c0.4,1,0.9,1.8,1.7,2.7c0.8,0.8,1.7,1.3,2.7,1.7 c1,0.4,2,0.6,3.6,0.7C25.4,45,25.9,45,30,45s4.6,0,6.2-0.1c1.6-0.1,2.7-0.3,3.6-0.7c1-0.4,1.8-0.9,2.7-1.7c0.8-0.8,1.3-1.7,1.7-2.7 c0.4-1,0.6-2,0.7-3.6C45,34.6,45,34.1,45,30s0-4.6-0.1-6.2c-0.1-1.6-0.3-2.7-0.7-3.6c-0.4-1-0.9-1.8-1.7-2.7 c-0.8-0.8-1.7-1.3-2.7-1.7c-1-0.4-2-0.6-3.6-0.7C34.6,15,34.1,15,30,15L30,15z" fill="#FFFFFF"></path>
								<path style={ style_icon_inner_color } className="icon" d="M30,22.3c-4.3,0-7.7,3.4-7.7,7.7s3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7S34.3,22.3,30,22.3z M30,35c-2.8,0-5-2.2-5-5 c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C35,32.8,32.8,35,30,35z" fill="#FFFFFF"></path>
							</g>
							<foreignObject>Instagram</foreignObject>
						</switch>
					</svg>
				</a>
	
				<a style={ style_icon_spacing } href="https://github.com/foodoasisla">
					<svg className="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
						<switch>
							<g>
								<path fill="white" d="M40,20c0,4.4-1.3,8.3-3.8,11.8c-2.5,3.5-5.8,5.9-9.9,7.2c-0.5,0.1-0.8,0-1-0.2C25.1,38.6,25,38.3,25,38v-5.5
									c0-1.7-0.5-2.9-1.4-3.7c1-0.1,1.9-0.3,2.7-0.5c0.8-0.2,1.6-0.5,2.4-1c0.8-0.5,1.5-1,2.1-1.7c0.6-0.7,1-1.6,1.4-2.7
									c0.4-1.1,0.5-2.4,0.5-3.9c0-2.1-0.7-3.9-2.1-5.4c0.6-1.6,0.6-3.4-0.2-5.3c-0.5-0.2-1.2-0.1-2.1,0.3c-0.9,0.3-1.7,0.7-2.4,1.1l-1,0.6
									c-1.6-0.5-3.3-0.7-5-0.7s-3.4,0.2-5,0.7c-0.3-0.2-0.6-0.4-1.1-0.7s-1.2-0.6-2.2-1S10,8.1,9.5,8.3c-0.8,2-0.8,3.7-0.2,5.3
									c-1.4,1.5-2.1,3.3-2.1,5.4c0,1.5,0.2,2.8,0.5,3.9c0.4,1.1,0.8,2,1.4,2.7c0.6,0.7,1.3,1.3,2.1,1.7s1.7,0.8,2.4,1
									c0.8,0.2,1.7,0.4,2.7,0.5c-0.7,0.6-1.1,1.5-1.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4C13.5,32,13,32,12.4,32c-0.6,0-1.1-0.2-1.7-0.6
									c-0.6-0.4-1-0.9-1.4-1.6c-0.3-0.6-0.8-1-1.3-1.4s-0.9-0.6-1.3-0.6l-0.5-0.1c-0.4,0-0.6,0-0.8,0.1s-0.2,0.2-0.1,0.3
									c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.1,0.2,0.2,0.3,0.3L6.1,29c0.4,0.2,0.8,0.5,1.1,1c0.4,0.5,0.6,0.9,0.8,1.3l0.3,0.6
									c0.2,0.7,0.6,1.2,1.1,1.6c0.5,0.4,1.1,0.7,1.7,0.8c0.6,0.1,1.2,0.2,1.8,0.2c0.6,0,1.1,0,1.4-0.1l0.6-0.1c0,0.7,0,1.4,0,2.3
									c0,0.9,0,1.4,0,1.4c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.6,0.3-1,0.2c-4-1.3-7.3-3.7-9.9-7.2S0,24.4,0,20c0-3.6,0.9-7,2.7-10
									S6.9,4.5,10,2.7S16.4,0,20,0s7,0.9,10,2.7s5.5,4.2,7.3,7.3C39.1,13,40,16.4,40,20z"></path>
							</g>
							<foreignObject>GitHub</foreignObject>
						</switch>
					</svg>
				</a>
			</div>
		</section>
	
		<br /><br />
	
		<section style={ style_section_donate }>
			<p>This is an <a style={ style_anchors } href="https://github.com/foodoasisla/site/blob/master/LICENSE">open source</a> project.</p>
			<p>You can download or <a style={ style_anchors } href="https://github.com/foodoasisla/site/issues">contribute</a> to the code on <a style={ style_anchors } href="https://github.com/foodoasisla/site">GitHub</a>.</p>
		</section>
		<br /><br />
	
	
		<section style={ style_section_donate }>
			<p>FOLA is in beta. <a style={ style_anchors }  href="/beta">Find out more about this</a>.</p> 
		</section>
		
	
			</div> 
		</footer>
		)
	}
};

export default Footer;