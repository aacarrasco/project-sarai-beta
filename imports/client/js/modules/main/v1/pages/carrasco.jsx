import React from 'react';
import {Carrasco} from './../components/carrasco-component.jsx'

export default (PageCtx, {FlowRouter, mount}, {Components}) => {

	const {
		CLLayout,
		CLHeader,
		CLDrawer,
		CLHeaderRow,
		CLBody,
		CLNav,
		CLLogo
	} = Components;

	FlowRouter.route('/carrasco', {
		action: () => {
			mount(PageCtx, {
				content: (
					<CLLayout>
						<CLHeader>
							<CLHeaderRow>
								<CLLogo label="Angelica" />
								<CLNav links = {[
									{
										url: '/',
										name: 'Home'
									}
								]} />
							</CLHeaderRow>
						</CLHeader>
						<CLDrawer>
							<CLLogo label="Angelica" />
							<CLNav links = {[
								{
									url: '/',
									name: 'Home'
								}
							]} />
						</CLDrawer>
						<CLBody>
							<div>
								Hello World!
							</div>
						</CLBody>
					</CLLayout>
				)
			});
		}
	});
}