<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let eraserSize: number = 10;
	export let visible: boolean = false;

	const dispatch = createEventDispatcher<{
		change: { size: number };
		close: undefined;
	}>();

	let tempSize = eraserSize;

	$: if (visible) {
		tempSize = eraserSize;
	}

	function handleSizeChange() {
		dispatch("change", { size: tempSize });
	}

	function handleClose() {
		dispatch("close");
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			handleClose();
		} else if (event.key === "Enter") {
			handleSizeChange();
			handleClose();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			handleClose();
		}
	}
</script>

{#if visible}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="modal-backdrop" 
		on:click={handleBackdropClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="eraser-settings-title"
	>
		<div class="modal-content">
			<div class="modal-header">
				<h3 id="eraser-settings-title">Eraser Settings</h3>
				<button class="close-button" on:click={handleClose} aria-label="Close">×</button>
			</div>
			
			<div class="modal-body">
				<div class="setting-group">
					<label for="eraser-size">Eraser Size:</label>
					<div class="size-controls">
						<input
							id="eraser-size"
							type="range"
							min="1"
							max="50"
							bind:value={tempSize}
							on:input={handleSizeChange}
							class="size-slider"
						/>
						<input
							type="number"
							min="1"
							max="50"
							bind:value={tempSize}
							on:input={handleSizeChange}
							class="size-input"
						/>
					</div>
					<div class="size-preview">
						<div 
							class="preview-circle" 
							style="width: {Math.min(tempSize, 30)}px; height: {Math.min(tempSize, 30)}px;"
						></div>
						<span class="size-label">{tempSize}px</span>
					</div>
				</div>
			</div>

			<div class="modal-footer">
				<button class="button secondary" on:click={handleClose}>Cancel</button>
				<button class="button primary" on:click={() => { handleSizeChange(); handleClose(); }}>Apply</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background: var(--background-fill-primary);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-drop-lg);
		min-width: 300px;
		max-width: 400px;
		max-height: 80vh;
		overflow: hidden;
		animation: modalSlideIn 0.2s ease-out;
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.modal-header {
		padding: var(--spacing-lg);
		border-bottom: 1px solid var(--border-color-primary);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.modal-header h3 {
		margin: 0;
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--body-text-color);
	}

	.close-button {
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: var(--body-text-color-subdued);
		padding: 0;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-sm);
	}

	.close-button:hover {
		background-color: var(--background-fill-secondary);
		color: var(--body-text-color);
	}

	.modal-body {
		padding: var(--spacing-lg);
	}

	.setting-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.setting-group label {
		font-weight: var(--weight-semibold);
		color: var(--body-text-color);
		font-size: var(--text-sm);
	}

	.size-controls {
		display: flex;
		gap: var(--spacing-md);
		align-items: center;
	}
	.size-slider {
		flex: 1;
		height: 6px;
		background: var(--slider-color);
		border-radius: var(--radius-sm);
		outline: none;
		appearance: none;
		-webkit-appearance: none;
	}

	.size-slider::-webkit-slider-thumb {
		appearance: none;
		-webkit-appearance: none;
		width: 18px;
		height: 18px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid var(--background-fill-primary);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.size-slider::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid var(--background-fill-primary);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.size-input {
		width: 60px;
		padding: var(--spacing-sm);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-sm);
		background: var(--input-background-fill);
		color: var(--body-text-color);
		text-align: center;
	}

	.size-input:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: 0 0 0 2px var(--color-accent-soft);
	}

	.size-preview {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-md);
		background: var(--background-fill-secondary);
		border-radius: var(--radius-sm);
		justify-content: center;
	}

	.preview-circle {
		background: var(--color-accent);
		border-radius: 50%;
		opacity: 0.7;
	}

	.size-label {
		font-size: var(--text-sm);
		color: var(--body-text-color-subdued);
		font-weight: var(--weight-medium);
	}

	.modal-footer {
		padding: var(--spacing-lg);
		border-top: 1px solid var(--border-color-primary);
		display: flex;
		gap: var(--spacing-md);
		justify-content: flex-end;
	}

	.button {
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		cursor: pointer;
		border: 1px solid transparent;
		transition: all 0.15s ease;
	}

	.button.primary {
		background: var(--color-accent);
		color: white;
		border-color: var(--color-accent);
	}

	.button.primary:hover {
		background: var(--color-accent-hover, var(--color-accent));
		transform: translateY(-1px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.button.secondary {
		background: var(--background-fill-secondary);
		color: var(--body-text-color);
		border-color: var(--border-color-primary);
	}

	.button.secondary:hover {
		background: var(--background-fill-secondary-hover, var(--background-fill-secondary));
		border-color: var(--border-color-accent);
	}
</style>
