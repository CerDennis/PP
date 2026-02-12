import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: 'vitest.setup.ts',
		exclude: ['dist/**', 'node_modules/**'],
		coverage: {
			enabled: true,
			provider: 'v8',
			reporter: ['text', 'cobertura', 'lcov'],
			reportsDirectory: 'coverage',
			include: ['src/**'],
			exclude: [
				'**/(test|mock)*.ts(x)?', // exclude file which name starts with test or mock
				'src/**/types/*' // exclude types
			]
		},
		clearMocks: true,
		mockReset: true,
		restoreMocks: true,
		reporters: ['junit'],
		outputFile: 'junit.xml'
	}
});
