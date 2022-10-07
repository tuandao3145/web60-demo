import { Card } from "antd";
import React from "react";

export const AnnoucementThree = () => {
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
						src="//cdn.shopify.com/s/files/1/0299/9497/5365/articles/c9QD2mM_1100x.jpg?v=1660998132"
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
							Noface Herold Raffle
						</h1>
						<span
							class="circle-divider caption-with-letter-spacing"
							itemprop="dateCreated pubdate datePublished"
						>
							<time datetime="2022-08-20T12:26:03Z">August 2022</time>
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
						<div>
							<p>
								I'm Herold -&nbsp;half Thestrals - half Unicorn - Half of me is
								death , half of me is life
							</p>
							<p>
								<a
									href="https://m.imgur.com/a/Pdr4wo8"
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
								<strong>
									<img
										src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/J16h9AU_750x750.jpg?v=1660997465"
										alt=""
									/>
								</strong>
							</p>
						</div>
					</div>
				</Card>
			</article>
		</Card>
	);
};
