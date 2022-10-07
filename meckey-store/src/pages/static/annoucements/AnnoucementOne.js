import { Card } from "antd";
import React from "react";

export const AnnoucementOne = () => {
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
						src="https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/dracu_hogwig_1100x.jpg?v=1663305431"
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
							Dracula Hogwig Raffle Sale
						</h1>
						<span
							class="circle-divider caption-with-letter-spacing"
							itemprop="dateCreated pubdate datePublished"
						>
							<time datetime="2022-09-18T13:31:13Z">September 2022</time>
						</span>
					</header>
					<div class="article-template__social-sharing page-width page-width--narrow">
						<script
							src="//cdn.shopify.com/s/files/1/0299/9497/5365/t/6/assets/share.js?v=137220683999880290031630835161"
							defer="defer"
						></script>
					</div>
					<div>
						<p>
							<span>
								Hogwig is formed by combining Hogwarts &amp; Hedwig. Inspired by
								the magical world, the Hogwarts owls will bring you the offer
								letters for a new school year. Hogwig also be the first of many
								magical creatures that will arrive this year and waiting for
								your adoption.
							</span>
						</p>
						<p>
							<span>
								Product album :&nbsp;
								<a
									href="https://imgur.com/a/40ZmReX"
									target="_blank"
									rel="noopener noreferrer"
								>
									https://imgur.com/a/40ZmReX
								</a>
							</span>
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
							<li>Hogwig $70 per cap , 15 caps per colorway.</li>
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
								<strong>Casting process</strong>
							</a>
						</p>

						<p>
							&nbsp;
							<img
								src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/dracu_hogwig_3_750x750.jpg?v=1663305597"
								alt=""
							/>
						</p>
						<p>&nbsp;</p>
						<p>
							<img
								src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/Rfx0YHN_750x750.jpg?v=1663507855"
								alt=""
							/>
						</p>
						<p>&nbsp;</p>
					</div>
				</Card>
			</article>
		</Card>
	);
};
