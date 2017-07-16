using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication_vide.Controllers
{
    public enum EnumTypeDocument
    {

        /// <summary>
        /// Valeur qui n'existe pas en base de données.
        /// </summary>

        effetFacture = 0,

        /// <summary>
        /// demande de prix
        /// </summary>

        demandePrix = 1,

        /// <summary>
        /// commande
        /// </summary>

        commande = 2,

        /// <summary>
        /// bon de reception
        /// </summary>

        bonReception = 3,

        /// <summary>
        /// facture d'achat
        /// </summary>

        factureAchat = 4,

        /// <summary>
        /// facture de vente
        /// </summary>

        factureVente = 5,

        /// <summary>
        /// brouillon d'achat
        /// </summary>

        brouillonAchat = 6,

        /// <summary>
        /// brouillon de vente
        /// </summary>

        brouillonVente = 7,

        /// <summary>
        /// devis
        /// </summary>

        devis = 8,

        /// <summary>
        /// Reglement
        /// </summary>

        reglement = 9,

        /// <summary>
        /// Ecart
        /// </summary>

        ecart = 10,

        /// <summary>
        /// Relance
        /// </summary>

        relance = 11,

        /// <summary>
        /// bonLivraison
        /// </summary>

        bonLivraison = 12,

        /// <summary>
        /// acompte
        /// </summary>

        acompte = 13,

    }

    public partial class EffetFacture
    {
        public long EffetFactureId { get; set; }

        public long FactureId { get; set; }

        public DateTime? DateEcheance { get; set; }

        public long? ModeReglementId { get; set; }

        public decimal? Montant { get; set; }

        public long UtilisateurId { get; set; }

        public DateTime DateCreation { get; set; }

        public DateTime DateModif { get; set; }

        public long CreateurId { get; set; }

        public long? PointageId { get; set; }

        public Pointage Pointage { get; set; }

        public bool Ecart { get; set; }

        public byte EtatId { get; set; }

        public long? SessionComptabilisationId { get; set; }

        public byte? NiveauRelanceId { get; set; }

        public DateTime? DateDerniereRelance { get; set; }

    }

    public partial class EffetFacture
    {
        public EffetFacture()
        {
            //this.EtatId = (byte)EnumEtatReglement.EnCours;
        }

        public string NumDoc { get; set; }

        public DateTime? DateDocument { get; set; }

        /// <summary>
        /// Renvoie le type de document ecart ou effetFacture.
        /// </summary>
        /// <returns></returns>
        public EnumTypeDocument GetTypePieceComptable()
        {
            return this.Ecart ? EnumTypeDocument.ecart : EnumTypeDocument.effetFacture;
        }


        /// <summary>
        /// la valeur de l'identifiant de la pièce (attention ça peut ne pas correspondre à une clef primaire, ex: EffetFacture.FactureId).
        /// </summary>
        /// <returns></returns>
        public long GetPieceId()
        {
            return this.FactureId;
        }

        /// <summary>
        /// Texte représant l'instance.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            string texte = string.Format("{0}-{1}", this.DateEcheance, this.Montant);
            return texte;
        }

    }
    /// <summary>
    /// Enumére les états d'un règlement.
    /// </summary>
    public enum EnumEtatReglement : byte
    {
        /// <summary>
        /// Règlement en cours
        /// </summary>
        EnCours = 20,

        /// <summary>
        /// Règlement comptabilisé.
        /// </summary>
        Comptabilise = 21,

    }

    public enum EnumTypeCompte
    {
        /// <summary>
        /// Auxiliaire_TTC
        /// </summary>
        Auxiliaire_TTC = 1,

        /// <summary>
        /// General_HT
        /// </summary>
        General_HT = 2,

        /// <summary>
        /// General_TVA
        /// </summary>
        General_TVA = 3,

        /// <summary>
        /// General_Reglement
        /// </summary>
        General_Reglement = 4,

        /// <summary>
        /// Auxilaire_Reglement
        /// </summary>
        Auxiliaire_Reglement = 5
    }

    public partial class Reglement
    {
        public long ReglementId { get; set; }
        public long DossierId { get; set; }

        public DateTime DateReglement { get; set; }
        public string NumReglement { get; set; }
        public long? ModeReglementId { get; set; }
        public long? BanqueId { get; set; }
        public long? NumCheque { get; set; }
        public string Emetteur { get; set; }
        public long TiersId { get; set; }
        public decimal? Montant { get; set; }
        public Int16? DeviseId { get; set; }
        public bool RemisEnBanque { get; set; }
        public string BlocNote { get; set; }
        public long UtilisateurId { get; set; }
        public DateTime DateCreation { get; set; }
        public DateTime DateModif { get; set; }
        public long CreateurId { get; set; }

        public decimal? TauxDev { get; set; }

        public long? PointageId { get; set; }
        public Pointage Pointage { get; set; }

        public byte EtatId { get; set; }

        public long? SessionComptabilisationId { get; set; }

    }

    public partial class Reglement
    {
        public Reglement()
        {
            this.EtatId = (byte)EnumEtatReglement.EnCours;
        }

        /// <summary>
        /// Les types de comptes d'EnlaceCpta liès au règlement.
        /// </summary>
        public EnumTypeCompte[] TypeCompteArray()
        {
            return new EnumTypeCompte[] { EnumTypeCompte.Auxiliaire_Reglement, EnumTypeCompte.General_Reglement };
        }

        /// <summary>
        /// Type de pièce comptable.
        /// </summary>
        /// <returns></returns>
        public EnumTypeDocument GetTypePieceComptable()
        {
            return EnumTypeDocument.reglement;
        }

        /// <summary>
        /// Identifiant de la pièce.
        /// </summary>
        /// <returns></returns>
        public long GetPieceId()
        {
            return this.ReglementId;
        }
    }

    public partial class Pointage
    {

        public long PointageId { get; set; }

        public long DossierId { get; set; }

        public long TiersId { get; set; }
        public DateTime DatePointage { get; set; }

        public string Lettrage { get; set; }

        public long UtilisateurId { get; set; }

        public DateTime DateCreation { get; set; }

        public DateTime DateModif { get; set; }

        public long CreateurId { get; set; }

        public virtual ICollection<EffetFacture> EffetFacture { get; set; }

        public virtual ICollection<Reglement> Reglement { get; set; }

    }
}