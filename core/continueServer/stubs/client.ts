import { ArtifactType, EmbeddingsCacheResponse } from "../interface";

export class ContinueServerClient {
  constructor(
    private readonly serverUrl: string,
    private readonly userToken: Promise<string | undefined>,
  ) {}

  public async getConfig(): Promise<{ configJson: string; configJs: string }> {
    throw new Error("Not Implemented");
  }

  public async getFromIndexCache<T extends ArtifactType>(
    keys: string[],
    artifactId: T,
  ): Promise<EmbeddingsCacheResponse<T>> {
    return { files: {} };
  }
}
