import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "./images/favicon.svg";
function Footer() {
	return (
		<div id="footer">
			<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col">
							<img alt="logo" src={logo} />
						</div>
						<div class="footer-col">
							<h4>Stockplot</h4>
							<ul>
								<li>
									<a href="/">about us</a>
								</li>
								<li>
									<a href="/">our services</a>
								</li>
								<li>
									<a href="/">privacy policy</a>
								</li>
								<li>
									<a href="/">affiliate program</a>
								</li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>get help</h4>
							<ul>
								<li>
									<a href="/">FAQ</a>
								</li>
								<li>
									<a href="/">shipping</a>
								</li>
								<li>
									<a href="/">returns</a>
								</li>
								<li>
									<a href="/">order status</a>
								</li>
								<li>
									<a href="/">payment options</a>
								</li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>top blogs</h4>
							<ul>
								<li>
									<a href="/">Technical Analysis</a>
								</li>
								<li>
									<a href="/">Bollinger Bands</a>
								</li>
								<li>
									<a href="/">RSI</a>
								</li>
								<li>
									<a href="/">MACD</a>
								</li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">
								<a href="/">
									<FacebookIcon fontSize="large" />
								</a>
								<a href="/">
									<LinkedInIcon fontSize="large" />
								</a>
								<a href="/">
									<GitHubIcon fontSize="large" />
								</a>
								<a href="/">
									<InstagramIcon fontSize="large" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr></hr>
				<p
					style={{
						padding: "10px",
						fontSize: "20px",
						textAlign: "center",
						color: "#000",
					}}>
					Copyright © 2021 Stockplot
				</p>
			</footer>
		</div>
	);
}

export default Footer;
