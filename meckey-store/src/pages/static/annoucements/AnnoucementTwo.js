import { Card } from "antd";
import React from "react";

export const AnnoucementTwo = () => {
	return (
		<Card>
			<article
				class="article-template"
				itemscope=""
				itemtype="http://schema.org/BlogPosting"
			>
				<div class="article-template__hero-container">
					<img
						alt={"annouce"}
						src="//cdn.shopify.com/s/files/1/0299/9497/5365/articles/2_-_RBCNONH_1100x.jpg?v=1662729776"
					/>
				</div>

				<Card
					style={{
						textAlign: "left",
						width: "50%",
						marginLeft: "25%",
						marginRight: "25%",
					}}
					size="middle"
				>
					<header class="page-width page-width--narrow">
						<h1 class="article-template__title" itemprop="headline">
							Dracula Herold Raffle Sale
						</h1>
						<span
							class="circle-divider caption-with-letter-spacing"
							itemprop="dateCreated pubdate datePublished"
						>
							<time datetime="2022-09-09T13:23:09Z">September 2022</time>
						</span>
					</header>
					<div class="article-template__social-sharing page-width page-width--narrow">
						<script
							src="//cdn.shopify.com/s/files/1/0299/9497/5365/t/6/assets/share.js?v=137220683999880290031630835161"
							defer="defer"
						></script>
					</div>
					<div
						class="article-template__content page-width page-width--narrow rte"
						itemprop="articleBody"
					>
						<p>
							I'm Herold -&nbsp;half Thestrals - half Unicorn - Half of me is
							death , half of me is life
						</p>
						<p>
							<a
								href="https://imgur.com/a/X4ptP4v"
								target="_blank"
								rel="noopener noreferrer"
							>
								Product album&nbsp;
							</a>
						</p>
						<p>
							Maker :<span>&nbsp;</span>
							<a
								href="https://www.instagram.com/zy.cap/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Zy.cap
							</a>
						</p>
						<p>
							<strong>Specification:&nbsp;</strong>
						</p>
						<ul>
							<li>Multi-shots resin.</li>
							<li>$70 per cap , 15 caps per colorway.</li>
							<li>Shipping within 7 days.</li>
							<li>Hand cast with resin, there's no paint involved.</li>
							<li>
								These artisan keycaps are compatible with MX
								keyboards.&nbsp;&nbsp;
							</li>
						</ul>
						<p>
							<a
								href="https://www.reddit.com/r/MechanicalKeyboards/comments/v670yv/artisan_scupting_process_herold"
								target="_blank"
								rel="noopener noreferrer"
							>
								<strong>Sculpting process</strong>
							</a>
						</p>
						<p>
							&nbsp;
							<img
								src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/5_-_He3refK_750x750.jpg?v=1662729066"
								alt=""
							/>
						</p>
						<p>
							<img
								src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/6_-_u4SATbC_750x750.jpg?v=1662729066"
								alt=""
							/>
						</p>
					</div>
				</Card>
			</article>
		</Card>
	);
};
