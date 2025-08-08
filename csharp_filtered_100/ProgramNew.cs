using System;
using System.Security.Cryptography;

public class ProgramNew
{
	public void GenerateBadKey()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		Random rng = new Random();
		byte[] key = new byte[16];
		rng.NextBytes(key);
		SymmetricAlgorithm cipher = (SymmetricAlgorithm)(object)Aes.Create();
		cipher.Key = key;
	}
	//{/fact}

	public void GenerateBadKeyGcm()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		Random rng = new Random();
		byte[] key = new byte[16];
		rng.NextBytes(key);
		AesGcm cipher = new AesGcm(key);
	}
	//{/fact}

	public void GenerateGoodKey()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=0}
		RandomNumberGenerator rng = RandomNumberGenerator.Create();
		byte[] key = new byte[16];
		rng.GetBytes(key);
		Aes cipher = Aes.Create();
		((SymmetricAlgorithm)cipher).Key = key;
	}

	//{/fact}
	public void GenerateGoodKeyGcm()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=0}
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		RandomNumberGenerator rng = RandomNumberGenerator.Create();
		byte[] key = new byte[16];
		rng.GetBytes(key);
		AesGcm cipher = new AesGcm(key);
	}

	//{/fact}
	public void GenerateBadKeyCcm()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		Random rng = new Random();
		byte[] key = new byte[16];
		rng.NextBytes(key);
		AesCcm cipher = new AesCcm(key);
	}

	//{/fact}
	public void GenerateGoodKeyCcm()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=0}
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		RandomNumberGenerator rng = RandomNumberGenerator.Create();
		byte[] key = new byte[16];
		rng.GetBytes(key);
		AesCcm cipher = new AesCcm(key);
	}
	//{/fact}

	public void GenerateBadKeyChaCha20()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		Random rng = new Random();
		byte[] key = new byte[16];
		rng.NextBytes(key);
		ChaCha20Poly1305 cipher = new ChaCha20Poly1305(key);
	}
	//{/fact}

	public void GenerateGoodKeyChaCha20()
	{
		//{fact rule=weak-random-number-generation@v1.0 defects=0}
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Expected O, but got Unknown
		RandomNumberGenerator rng = RandomNumberGenerator.Create();
		byte[] key = new byte[16];
		rng.GetBytes(key);
		ChaCha20Poly1305 cipher = new ChaCha20Poly1305(key);
	}
}
	//{/fact}
