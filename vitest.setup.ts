import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
	cleanup();
});

export const mockNavigate = vi.fn();
export const mockUseParams = vi.fn();
export const mockUseLocation = vi.fn();

vi.mock('react-router', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router')>();
	return {
		...actual,
		useNavigate: () => mockNavigate,
		useParams: () => mockUseParams,
		useLocation: () => mockUseLocation
	};
});
