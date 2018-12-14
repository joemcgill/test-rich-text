/**
 * BLOCK: test-rich-text
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const {	RichText } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-test-rich-text', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'test-rich-text - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'test-rich-text — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		content: {
			source: 'html',
			multiline: 'p',
			selector: '.test-rich-text',
			default: '',
		},
	},

	edit( { attributes, setAttributes } ) {
		return (
			<div>
				<h2>TEST</h2>
				<RichText
					multiline="p"
					className="test-rich-text"
					value={ attributes.content }
					placeholder="Placeholder text"
					onChange={ ( content ) => setAttributes( { content } ) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		return (
			<div>
				<h2>TEST</h2>
				<RichText.Content
					multiline="p"
					value={ attributes.content }
				/>
			</div>
		);
	},
} );
