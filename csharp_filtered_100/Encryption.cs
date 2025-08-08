using System.Security.Cryptography;

public class Encryption
{
	public void CreateAes1()
	{	
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes val = Aes.Create();
	}
	//{/fact}
	public void CreateAes2()
	{  
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes val = Aes.Create("ImplementationName");
	}
	//{/fact}
	public void CreateRijndael1()
	{	
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Rijndael val = Rijndael.Create();
	}
	//{/fact}
	public void CreateRijndael2()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Rijndael val = Rijndael.Create("ImplementationName");
	}
	//{/fact}
	public void CreateDES1()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		DES val = DES.Create();
	}
	//{/fact}
	public void CreateDES2()
	{	
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		DES val = DES.Create("ImplementationName");
	}
	//{/fact}
	public void CreateTripleDES1()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES val = TripleDES.Create();
	}
	//{/fact}
	public void CreateTripleDES2()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES val = TripleDES.Create("ImplementationName");
	}
	//{/fact}
	public void CreateRC21()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		RC2 val = RC2.Create();
	}
	//{/fact}

	public void CreateRC22()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		RC2 val = RC2.Create("ImplementationName");
	}
	//{/fact}
}
