import SubPanelsStack from "./../../base/SubPanelsStack";
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';



class Block extends Component {
	constructor() {
		super();
		// console.log(this);
		// this.registerControls = this.registerControls.bind(this);
		// this.subPanelsStack = new SubPanelsStack(this);
		// this.addPanel = new SubPanelsStack(this).addPanel
		this.subPanelsStack = new SubPanelsStack(this);
        this.addPanel = this.subPanelsStack.addPanel.bind(this.subPanelsStack); // Bind the method
        this.init();
	}

	init = () => {
		registerBlockType('create-block/starter-block-button', {
			// Localize title using wp.i18n.__()
			apiVersion: 3,
			description: __('Example block scaffolded with Create Block tool.'),
			title: __('Block Button'),
			// Category Options: common, formatting, layout, widgets, embed
			category: 'common',
			// Dashicons Options – https://goo.gl/aTM1DQ
			icon: 'wordpress-alt',
			// Limit to 3 Keywords / Phrases
			keywords: [
				__('Example'),
				__('Block Button'),
				__('Code Samples')
			],
			textdomain: "block",
			edit: this.editBlock,
			save: this.saveBlock,
		});
		// this.addPanel = new SubPanelsStack(this).addPanel; // Extract the method
		this.registerPanels(); // Call the registerControls method
	}

	registerPanels = () => {
		this.addPanel(
			'BlockButtonTitle',
			{
				label: __('Title', 'block'),
				type: '',
				label_block: true,
				dynamic: {
					active: true,
				},
				default: __('Cool Number', 'block'),
				placeholder: __('Cool Number', 'block'),
			}
		);
		// this.addPanel(
		// 	'BlockButtonUrl',
		// 	{
		// 		label: __('Url', 'block'),
		// 		type: ControlsManager.URL,
		// 		label_block: true,
		// 		dynamic: {
		// 			active: true,
		// 		},
		// 		placeholder: __('https://your-link.com', 'block'),
		// 		separator: 'before',
		// 	}
		// )
		// this.addPanel(
		// 	'BlockButtonIcon',
		// 	{
		// 		label: __('Icon', 'block'),
		// 		type: ControlsManager.ICON,
		// 		label_block: true,
		// 		dynamic: {
		// 			active: true,
		// 		},
		// 		fa4compatibility: 'icon',
		// 		default: {
		// 			value: 'fas fa-star',
		// 			library: 'fa-solid',
		// 		},
		// 	}
		// )
	}

	editBlock = () => {
		return this.renderBlock();
	}

	saveBlock = () => {
		return this.renderBlock(false);
	}

	renderBlock = (isEditor = true) => {
		return (
			<p {...(isEditor ? useBlockProps() : useBlockProps.save())}>
				{isEditor
					? __('Starter Block – hello from the editor!', 'starter-block')
					: 'Starter Block – hello from the saved content!'}
			</p>
		);
	}
}

new Block();
